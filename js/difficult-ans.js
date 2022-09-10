const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

switch (params.q1) {
  case "a":
    document.getElementById("q1a").checked = true;
    document.getElementById("q1a_msg").style.display = "unset";
    break;
  case "b":
    document.getElementById("q1b").checked = true;
    document.getElementById("q1b_msg").style.display = "unset";
    break;
  case "c":
    document.getElementById("q1c").checked = true;
    document.getElementById("q1c_msg").style.display = "unset";
    break;
}

switch (params.q2) {
  case "a":
    document.getElementById("q2a").checked = true;
    document.getElementById("q2a_msg").style.display = "unset";
    break;
  case "b":
    document.getElementById("q2b").checked = true;
    document.getElementById("q2b_msg").style.display = "unset";
    break;
  case "c":
    document.getElementById("q2c").checked = true;
    document.getElementById("q2c_msg").style.display = "unset";
    break;
}

switch (params.q3) {
  case "a":
    document.getElementById("q3a").checked = true;
    document.getElementById("q3a_msg").style.display = "unset";
    break;
  case "b":
    document.getElementById("q3b").checked = true;
    document.getElementById("q3b_msg").style.display = "unset";
    break;
  case "c":
    document.getElementById("q3c").checked = true;
    document.getElementById("q3c_msg").style.display = "unset";
    break;
}
