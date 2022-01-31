const findProcesses = (startItem, endItem, tasks) => {
  
    let arrTasks = tasks.map(value=>value.split(':'))
   
    function helper(arr, start){
      let myans = arr.find((elem,i)=>{
        if(elem.includes(start) && elem.indexOf(start) === 1){
          return elem
        }
      })
  
     
      return myans
    }
   
    let result = []
    
    function repProc(arrTasks, startItem,endItem, count=0){
      
      if(startItem === endItem){
        return result
      }
      if(count > arrTasks.length){
        return []
      }
      let findArr = helper(arrTasks,startItem)
      console.log(findArr)
      
    if(findArr === undefined){
        return []
    }
    let next = findArr[2]

    let prev = findArr[0]
    
    result.push(prev)
      
      
    return repProc(arrTasks, next, endItem, count+=1)
    }
   
    return repProc(arrTasks,startItem,endItem)
  
      
  }


  console.log(findProcesses("field","bread",["gather:field:wheat","mill:wheat:flour","bake:flour:bread"]))
  console.log(findProcesses("field","field",["gather:field:wheat","mill:wheat:flour","bake:flour:bread"]))
  console.log(findProcesses("field","spaceship",["gather:field:wheat","mill:wheat:flour","bake:flour:bread"]))
