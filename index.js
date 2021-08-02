class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase()+string.substring(1,string.length)
  }

  static sanitize(string){
    const regex = /[^a-zA-Z0-9\-\ \']/g;
    return string.replaceAll(regex, "")
  }

  static titleize(string){
    let strings=string.split(" ")
    for(let i=0;i<strings.length; i++){
      if(!"the a an but of and for at by from".includes(strings[i]))
        strings[i]=this.capitalize(strings[i])
    }
    string=strings.join(" ")
    return this.capitalize(string)
  }
}