import footer from "../Components/footer.js";
import navbar from "../Components/navbar.js";
const DOM_footer = document.querySelector("#footer");
DOM_footer.innerHTML = footer();
let nav_div = document.querySelector(".navbar");
nav_div.innerHTML = navbar();

//signup div
let signup_div = document.getElementById("signup_div");
signup_div.onclick = () => {
  console.log("clicked");
  document.getElementById("mid").remove();
  document.getElementById("bottom").remove();
  let div = document.createElement("div");
  div.setAttribute("id", "signup_mid_div");
  let input1 = document.createElement("input");
  input1.setAttribute("placeholder", " FULL NAME");
  let input2 = document.createElement("input");
  input2.setAttribute("placeholder", " USER NAME");

  let input3 = document.createElement("input");
  input3.setAttribute("placeholder", " EMAIL");

  let input4 = document.createElement("input");
  input4.setAttribute("placeholder", " PASSWORD");

  let signup_btn = document.createElement("button");

  input1.setAttribute("id", "full_name");
  input2.setAttribute("id", "user_name");
  input3.setAttribute("id", "signup_email");
  input4.setAttribute("id", "signup_password");
  signup_btn.setAttribute("id", "signup_btn");

  signup_btn.onclick = () => {
    signup();
  };
  signup_btn.textContent = "CREATE ACCOUNT";

  div.append(input1, input2, input3, input4, signup_btn);
  document.getElementById("left_div").append(div);
};

//login div
document.getElementById("login_div").onclick = () => {
  document.getElementById("signup_mid_div").remove();

  let mid = document.createElement("div");
  let bottom = document.createElement("div");

  mid.setAttribute("id", "mid");

  let login_input1 = document.createElement("input");
  let login_input2 = document.createElement("input");
  login_input1.setAttribute("placeholder", "USER NAME");
  login_input1.setAttribute("id", "user_name");
  login_input2.setAttribute("placeholder", "PASSWORD");
  login_input2.setAttribute("id", "login_password");
  bottom.setAttribute("id", "bottom");
  mid.append(login_input1, login_input2);

  document.getElementById("left_div").append(mid, bottom);
  console.log("login");

  //bottom div content

  let checkbox_div = document.createElement("div");
  checkbox_div.setAttribute("id", "check_box");
  let check_box_div1 = document.createElement("div");
  let check_box_div2 = document.createElement("div");

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  let p = document.createElement("span");
  p.textContent = "Remember me";

  check_box_div1.append(input);
  check_box_div2.append(p);

  checkbox_div.append(check_box_div1, check_box_div2);

  var div_login_btn = document.createElement("div");
  div_login_btn.setAttribute("id", "login_btn_div");

  let div_login_btn_div1 = document.createElement("div");
  let div_login_btn_div2 = document.createElement("div");

  let login_button = document.createElement("button");
  login_button.setAttribute("id", "login_btn");
  login_button.textContent = "LOGIN";
  div_login_btn_div1.append(login_button);

  let link = document.createElement("a");
  link.textContent = "FORGOTTEN YOUR PASSWORD?";
  div_login_btn_div2.append(link);

  div_login_btn.append(div_login_btn_div1, div_login_btn_div2);
  bottom.append(checkbox_div, div_login_btn);
  login_button.onclick = () => {
    login();
  };
};

document.getElementById("login_btn").onclick = () => {
  login();
};

async function login() {
  try {
    var login_data = {
      username: document.getElementById("user_name").value,
      password: document.getElementById("login_password").value,
    };

    login_data = JSON.stringify(login_data);
    console.log(login_data);

    let url = `https://masai-api-mocker.herokuapp.com/auth/login`;
    let response = await fetch(url, {
      method: "POST",
      body: login_data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

async function signup() {
  try {
    var data = {
      name: document.getElementById("full_name").value,
      email: document.getElementById("signup_email").value,
      password: document.getElementById("signup_password").value,
      username: document.getElementById("user_name").value,
      mobile: "9876543210",
      description: "A Transformation in education!",
    };

    data = JSON.stringify(data);
    let url = `https://masai-api-mocker.herokuapp.com/auth/register`;

    let response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
