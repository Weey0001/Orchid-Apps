import {
  getInfoAsync,
  readAsStringAsync,
  writeAsStringAsync,
  documentDirectory,
  makeDirectoryAsync,
  deleteAsync
} from 'expo-file-system';
let path = documentDirectory +'/Clients'

export const addClient = async props => {

  let newClient = {
    name:props.name.trim(),
    nickname:props.nickname.trim(),
    socity:props.socity.trim(),
    email:props.email.trim(),
    address:props.address.trim(),
    cin:props.cin.trim(),
    tel:props.tel.trim()
  }

  console.log(newClient)

  checkValidation(newClient)
}

let checkValidation = async data => {
  let {
    name,
    nickname,
    socity,
    email,
    address,
    cin,
    tel
  } = data

  if(name===""||nickname===""||socity===""||email===""||address===""||cin===""||tel===""){
    alert("check your entries")
  }else{
    createDir(data)
  }

}

let createDir = async data => {
  try {
    let checkDir = await getInfoAsync(path)
    console.log(checkDir)

    if (!checkDir.isDirectory){
      await makeDirectoryAsync(path)
      
      let secondCheck = await getInfoAsync(path)

      if(secondCheck.isDirectory){
        addData(newClient)
      }
    }else{
      addData(newClient)
    } 
  } catch (error) {
    console.log(error)
  }
}

let addData = async data => {
  let filePath = path+'/clients.txt'
  // await deleteAsync(filePath)

  try {
    let checkfile = await getInfoAsync(filePath)

    if(!checkfile.exists){
      let write = await writeAsStringAsync(
        filePath,
        JSON.stringify([data]),
        {
          encoding:'utf8'
        }
      )
    }else{
      let read = await readAsStringAsync(
        filePath,
        {
          encoding:'utf8'
        }
      )
      let readParsed = JSON.parse(read)
      readParsed.push(data)

      await writeAsStringAsync(
        filePath,
        JSON.stringify(readParsed),
        {
          encoding:'utf8'
        }
      )
      console.log("Done")
      
    }    
  } catch (error) {
    console.log(error)
  }

}