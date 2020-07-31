import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, RefreshControl, ActivityIndicator } from 'react-native'

const list = new Array(10).fill('').map(()=>(Math.random()))

export default function App() {
  // console.log(list);
  const [loading,setLoading] = useState(false)
  const [endLoading,setEndLoading] = useState(false)
  const [data,setData] = useState(list)
  const renderItem = ({item,index})=>{
    return <View style={s.item}>
      <Text style={s.text}>
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

  return (
    <View style={s.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item=>String(item)}
        // refreshing={loading}
        // onRefresh={()=>{
        //   setLoading(true)
        //   setTimeout(() => {
        //     setLoading(false)
        //     setData((old)=>[...old,...new Array(10).fill('').map(()=>(Math.random()))])
        //   }, 2000);
        // }}
        ListFooterComponent={getIndicator}
        onEndReached={()=>{
          setEndLoading(true)
              setTimeout(() => {
                setEndLoading(false)
                setData((old)=>([...old,...new Array(10).fill('').map(()=>(Math.random()))]))
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
                setData(new Array(10).fill('').map(()=>(Math.random())))
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
  },
  item:{
    height: 200,
    backgroundColor: '#169',
    marginHorizontal:15,
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
  }
})
