// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

function get_template_A_str(user_info)
{
  let str = "";
  if (is_valid_data(user_info.greeting))
  {
    str += user_info.greeting + "<br/>";
  }

  str += "<table>";
  str +=   "<tr>";
  str +=     "<td style='border-right: 1px solid #000000; padding-right: 5px;'><img src='../../../assets/banijay-b.png' alt='Logo' height='50' width='50' /></td>";
  str +=     "<td style='padding-left: 5px;'>";
  str +=	   "<strong>" + user_info.name + "</strong>";
  str +=     is_valid_data(user_info.pronoun) ? "&nbsp;" + user_info.pronoun : "";
  str +=     "<br/>";
  str +=	   is_valid_data(user_info.job) ? user_info.job + "<br/>" : "";
  str +=	   user_info.email + "<br/>";
  str +=	   is_valid_data(user_info.phone) ? user_info.phone + "<br/>" : "";
  str +=     "</td>";
  str +=   "</tr>";
  str += "</table>";

  return str;
}

function get_template_B_str(user_info)
{
  let str = "";
  if (is_valid_data(user_info.greeting))
  {
    str += user_info.greeting + "<br/>";
  }

  str += "<table>";
  str +=   "<tr>";
  str +=     "<td style='border-right: 1px solid #000000; padding-right: 5px;'><img src='../../../assets/banijay-b.png' alt='Logo' height='50' width='50' /></td>";
  str +=     "<td style='padding-left: 5px;'>";
  str +=	   "<strong>" + user_info.name + "</strong>";
  str +=     is_valid_data(user_info.pronoun) ? "&nbsp;" + user_info.pronoun : "";
  str +=     "<br/>";
  str +=	   user_info.email + "<br/>";
  str +=	   is_valid_data(user_info.phone) ? user_info.phone + "<br/>" : "";
  str +=     "</td>";
  str +=   "</tr>";
  str += "</table>";

  return str;
}

function get_template_C_str(user_info)
{
  let str = "";
  if (is_valid_data(user_info.greeting))
  {
    str += user_info.greeting + "<br/>";
  }

  str += user_info.name;
  
  return str;
}