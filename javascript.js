let user = prompt('Enter smth with emoji')

if(user.includes(":)") && user.includes(":(")) {
    alert(user.replace(/:\)/g, "😊")
        .replace(/:\(/g, "😒")
    )
}else if (user.includes(':)')){
    alert(user.replace(":)",'😊 '))
}else if(user.includes(":(")){
    alert(user.replace(":(", "😒"))
}
