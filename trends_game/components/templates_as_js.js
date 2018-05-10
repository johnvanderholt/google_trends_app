vue_templates = {"start_screen":"<div>\r\n  <div  v-if=\"active\"   style=\"width: 700px; margin: auto; padding-top: 32px;\">\r\n    <!--this minwidth means this won't work on mobile phones-->\r\n    <div id=\"message_div\"  style=\"width: 100%;\" ></div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\" >\r\n        <div :style=\"{ marginLeft: '30px' }\">\r\n        <button  @click=\"add_team()\"   type=\"button\" class=\"btn btn-info btn-lg\"  style=\"height: 50px;\">Add team</button>\r\n        <div class=\"dropdown\">\r\n          <button  v-text=\"rounds  + ' rounds'\" :style=\"{ width: '99%' }\"  class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          </button>\r\n\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" >\r\n            <a  v-for=\"i in _.range(max_rounds)\" v-if=\"i > 0\" v-text=\"i + ' rounds'\" @click=\"set_rounds(i)\"    class=\"dropdown-item\" href=\"#\" >Action</a>\r\n\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-7\" style=\"padding-right: 0;\" >\r\n        <div  v-for=\"team in teams\" v-bind:id=\"'team_row_' + team.num \"   class=\"row\"  style=\"height: 25px;margin-bottom: 6px;\">\r\n          <div class=\"col-10\" style=\"padding-right: 0;\">\r\n            <div  contenteditable=\"true\" @input=\"update_teamname\" v-bind:id=\"t_input_id + team.num\" :style=\"{ backgroundColor: team.color  }\"   style=\"\r\n                           border-radius:5px;padding-left: 5px;\r\n                           padding-right: 5px;\r\n                           width: 100%;\r\n                           text-align: center;\" >{{team.name}}</div>\r\n          </div>\r\n          <div class=\"col-2\" style=\"padding-right: 30px; padding-left: 0px;\">\r\n            <button  @click=\"delete_team(team.num)\"   type=\"button\" class=\"btn btn-danger btn-block\"\r\n                    style=\"\r\n                        text-align: center;\r\n                        padding: 0rem  12px;\"\r\n            >X</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\" >\r\n        <button  @click=\"start_game()\" :style=\"{ backgroundColor: ' #28b463', borderColor: ' #28b463' }\"   type=\"button\" class=\"btn \" style=\"height: 50px;\">Start game</button>\r\n        <button  @click=\"load_old_game()\"   type=\"button\" class=\"btn btn-warning\" style=\"height: 50px;\">Load game</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n","game_screen":"<div>\r\n  <div  v-if=\"active\"   style=\"text-align: center; margin: auto\">\r\n    <h1>gamescreen</h1>\r\n    <div id=\"message_div\"  style=\"width: 100%;\" ></div>\r\n    <div class=\"row no-gutters\" style=\"max-width: 700px; margin: auto\">\r\n      <table  style=\"margin: auto;\">\r\n        <thead>\r\n        <th  v-for=\"team in teams\" v-bind:width=\"min_col_width\" :style=\"{ backgroundColor: team.color  }\"  style=\"text-align: center\" >{{team.name}}</th>\r\n        <th>links</th>\r\n        </thead>\r\n        <tbody>\r\n        <tr  v-for=\"row in queries\"  >\r\n          <td  v-for=\"query in row\" v-bind:width=\"min_col_width\"  >\r\n                  <span>\r\n                      <span  v-bind:width=\"points_span_width\" v-bind:font=\"points_span_font\"  >{{query.points_txt}}</span>\r\n                      <span>{{query.term}}</span>\r\n                  </span>\r\n          </td>\r\n          <td>\r\n            <button  v-bind:href=\"get_url(row)\" @click=\"open_link_in_tab\"   class=\"btn btn-success\" id=\"form_btn\" style=\"width: 100%;\">Link</button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td  v-for=\"total in points_totals\" v-bind:width=\"min_col_width\"  >\r\n            Total: {{total}}\r\n          </td>\r\n          <td></td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n      <!--\r\n                % :style=\"{textAlign: 'center'}\" =>\r\n      -->\r\n\r\n    </div>\r\n\r\n    <div class=\"clearfix\" style=\"padding-top: 24px;\"></div>\r\n    <label>There are {{rounds_remaining}} rounds remaining.</label>\r\n    <div class=\"clearfix\"></div>\r\n    <form  @submit.prevent=\"submit_query\"   style=\"max-width: 800px;margin: auto\" >\r\n      <div class=\"row\">\r\n        <span  v-for=\"team in teams\" v-bind:class=\"input_field_row_class\"   >\r\n                    <span>{{team.name}}</span>\r\n                    <div class=\"clearfix\" style=\"padding-top: 4px;\"></div>\r\n                    <input  v-model=\"query_form[team.num]\"   type=\"text\"/>\r\n                </span>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n      <button type=\"submit\">submit</button>\r\n    </form>\r\n    <div style=\"margin-top: 16px\">\r\n      <label>\r\n        <input  v-model=\"autosave\"   type=\"checkbox\"/>\r\n        Autosave the game to a cookie.\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <!--%\n  <button  @click=\"test()\"  >test</button>-->\r\n</div>\r\n\r\n","end_screen":"<div>\r\n  <div style=\"width: 700px;text-align: center;margin: auto\" >\r\n    <h1>Congratulations to team {{teams[winner_idx].name}}.</h1>\r\n    <div class=\"clearfix\"></div>\r\n    <h2  :style=\"{marginBottom: '30px'}\"  >They won with a score of {{winning_score}} points!</h2>\r\n    <button  v-for=\"i in _.range(links.length)\" @click=\"open_link(links[i])\"   class=\"btn btn-primary\">Link round {{i + 1}}</button>\r\n  </div>\r\n</div>"}