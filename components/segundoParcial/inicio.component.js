import { inicioStyle } from './inicio.style';
import { Text, View,Button, FlatList } from 'react-native';

import { useFonts } from 'expo-font';
import { useCallback ,useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

//import { useNavigation } from '@react-navigation/native';

export function InicioSP() {

    let [taskCount,setCount] =useState(0);
    let  [idCount,setId] =useState(0);
    let  [taskList,setList] =useState([]);
    let  [current,setCurrent] =useState([]);
    let  [countcomplete,setComplete] =useState(0);
    let valores =[];
   
  //const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../assets/fonts/LexendGiga-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
   
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const renderItem = ({ item }) => {
    if(item.state===true)
    return <Text style={{color:'black',backgroundColor:'green'}} onPress={()=>changeState(item)} >{item.title}</Text>
     if(item.state===false)
    return <Text style={{color:'black'}}  onPress={()=>changeState(item)}  >{item.title}</Text>
       
  }
  function changeState(item){
    setList(taskList.map(x=>x.id ===item.id? {...x,state:true}: x))
    setCurrent(taskList);
    let count =current.filter(x=>x.state===true);
    setComplete(count.length);

  }
  function addTask(){
    //idCount++;
   
    //let title= "Lorem ipsum AEfwrggaetbBDG";
   // console.log('prueba')
   setId(idCount+=10)
   let valor = {id:idCount, title:"lorem ipsum 123456",state:false};
  // valores.push(valor);
  
    setList([...taskList,valor]);
    setCurrent([...taskList,valor]);
    setCount(taskCount+1);
  }

  function complete(){
    setCurrent(taskList.filter(x=>x.state ===true));
  }
  function all(){
    setCurrent(taskList);
  }
  // {recentData.map((x)=>{ })}
  return (
    <View style={[inicioStyle.container]} onLayout={onLayoutRootView}>
          <View style={[inicioStyle.container]} onLayout={onLayoutRootView}>
            <View style={[inicioStyle.header]}>
            <Text style={[inicioStyle.title]}>{countcomplete}/{taskCount} Task</Text>
            </View>
            <View style={[inicioStyle.body]}>
            <Button
  style={[inicioStyle.btn]}
  title="Complete"
  color="black"
  onPress={()=>complete()}
  accessibilityLabel="Learn more about this purple button"
/>
<Button
  style={[inicioStyle.btn]}
  title="Incomplete"
  color="black"
  accessibilityLabel="Learn more about this purple button"
/>
<Button
  style={[inicioStyle.btn]}
  title="All"
  onPress={()=>all()}
  color="black"
  accessibilityLabel="Learn more about this purple button"
/>
<Button
  style={[inicioStyle.btn]}
  title="Add"
  
  onPress={()=>addTask()}
  color="black"
  accessibilityLabel="Learn more about this purple button"
/>
           

            <FlatList
        data={current}
        renderItem={renderItem}
        
      />
            </View>


        </View>
      

    </View>
  );
}
