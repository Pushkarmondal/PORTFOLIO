console.log("running")
document.querySelector('.image3').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo');
if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.image3').style.display = 'inline'
    document.querySelector('.image2').style.display = 'none'
}else{
    document.querySelector('.image2').style.display = 'none'
    document.querySelector('.image3').style.display = 'inline'

}
})