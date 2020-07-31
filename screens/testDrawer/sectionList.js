import React, { useState } from 'react'
import { StyleSheet, Text, View, SectionList, RefreshControl, ActivityIndicator } from 'react-native'

const list = new Array(Math.floor(Math.random()*10+1)).fill('').map((it,n)=>({
  data:new Array(Math.floor(Math.random()*10+1)).fill("").map(()=>(Math.random())), 
  title:n+'线'
}))

export default function App() {
  // console.log(list);
  const [loading,setLoading] = useState(false)
  const [endLoading,setEndLoading] = useState(false)
  const [data,setData] = useState(list)
  const renderItem = ({item,index})=>{
    // console.log(item);
    return <View style={s.item}>
      <Text style={{color:"black"}}>
       <Text style={s.title}>
         {index}
       </Text> {item}
      </Text>
    </View>
  }

  const getIndicator = ()=>(
    endLoading
    ?(<View style={s.indicatorContainer}>
      <ActivityIndicator
        style={s.indicator}
        color="#0000ff"
        size="large"
        animating={true}
      />
      <Text>
        正在加载更多
      </Text>
    </View>)
    :null
  )

  const renderSectionHeader = ({section})=>{
      return (
        <View style={s.sectionHeader}>
            <Text style={s.text}>
              {section.title}
            </Text>
        </View>
      )
  }

  return (
    <View style={s.container}>
      <SectionList
      stickySectionHeadersEnabled={true}
        sections={data}
        renderItem={renderItem}
        // keyExtractor={item=>String(item)}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={()=>(<View style={s.separator}></View>)}
        ListFooterComponent={getIndicator}
        onEndReached={()=>{
          setEndLoading(true)
              setTimeout(() => {
                setEndLoading(false)
                setData((old)=>([...old,{
                data:new Array(Math.floor(Math.random()*10+1)).fill("").map(()=>(Math.random())), 
                title:old.length+1+'线'
              }]))
              }, 2000);
        }}
        refreshControl={
          <RefreshControl 
            enabled={true}
            title="loading"
            colors={['red']}
            // tintColor="orange"
            refreshing={loading}
            onRefresh={()=>{
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
                setData(list)
              }, 2000);
            }}
          />
        }
        
      />
    </View>
  )
}

const s = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fafafa',
  },
  item:{
    height: 80,
    backgroundColor: '#169',
    // marginHorizontal:15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize: 20,
  },
  indicator:{
    // color:"red",
    margin:10
  },
  indicatorContainer:{
    alignItems: 'center',
  },
  sectionHeader:{
    height: 50,
    backgroundColor: '#93ebbe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator:{
    height: 3,
    backgroundColor: 'gray',
    flex: 1,
  }
})
