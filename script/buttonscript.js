/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//navbar
const navbar = document.getElementById("navbar");
const navbarbuttons_expertise = document.getElementById("nav_expertise");
const navbarbuttons_hobbies = document.getElementById("nav_hobbies");

// buttons
const details_bg = document.getElementById("show_details");
const expertise_bg = document.getElementById("show_expertise");
const hobbies_bg = document.getElementById("show_hobbies");

// content
const details_content = document.getElementById("personal_details");
const expertise_content = document.getElementById("expertise");
const hobbies_content = document.getElementById("hobbies");

// flag 
var is_expertise_shown = false;
var is_hobbies_shown = false;

function clicked_details(hideshow) 
{
    clicked_content(details_bg, details_content, hideshow);
}

function clicked_expertise(hideshow) 
{
    clicked_content(expertise_bg, expertise_content, hideshow);
}

function clicked_hobbies(hideshow) 
{
    clicked_content(hobbies_bg, hobbies_content, hideshow);
}


function clicked_content(bg, content, hide_or_show) 
{
    if(hide_or_show)
    {
        content.classList.toggle("shown_displayed_info");
        bg.querySelector("button").classList.toggle("active_button");
        
        // For extra buttons in navbar
        if(content === expertise_content)
            is_expertise_shown = show_navbutton(navbarbuttons_expertise, content, is_expertise_shown);
        else if(content === hobbies_content)
            is_hobbies_shown = show_navbutton(navbarbuttons_hobbies, content, is_hobbies_shown);
    }
    window.location.href = "#" + bg.id;
    
}

function show_navbutton(buttons, content, flag)
{
    if(!flag)
    {
        buttons.style.display = "flex";
        return true;
    }
    else 
    {
        buttons.style.display = "none";
        return false;
    }
}

function clicked_navbar()
{
    if(navbar.style.display==="flex")
    {
        navbar.style.display="none";
    }
    else
    {
        navbar.style.display="flex";
    }
}