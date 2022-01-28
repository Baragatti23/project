const btn_login_header=document.querySelector(".index--header_btnLogin_");
const login_modal=document.querySelector(".capModalLogin");
btn_login_header.addEventListener("click",e=>{
    e.stopPropagation();
    login_modal.style.display="flex";
});
login_modal.addEventListener("click",e=>{
    if(e.target === login_modal) login_modal.style.display="none";
});