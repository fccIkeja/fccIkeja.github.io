/**
 * Main.js
 *
 * This is the primary js file used in our website.
 * All general / non-specific functionality should
 * go here.
 *
 * Copyright 2016 FreeCodeCampLagos
 * --------------------------------
 * url: http:.//freecodecamplagos.github.io
 * src: https://github.com/FreeCodeCampLagos/FreeCodeCampLagos.github.io
 * dependson: jquery
 */

$(document).ready(function(){
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

    // check if scroll event happened
    $(window).scroll(function() {
        // check if user scrolled more than 550 from top of the browser window
        if ($(document).scrollTop() > 440) {
            // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
            $(".navbar-fixed-top").css("background-color", "#1bad04");
        } else {
            $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
    
    // collase the menu bar when navbar is clicked
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    //add users to the members section
    //users images array
    var usersImage= ["https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg", "https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg","https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg","https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg", "https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg", "https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg","https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg","https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg"];
   
    //users names
    var usersName = ["JOHN ARENU","JOHN ARENU","JOHN ARENU","JOHN ARENU","JOHN ARENU","JOHN ARENU","JOHN ARENU","JOHN ARENU"]; 
    //users skills
    var usersSkills = [["HTML"," CSS"," PHP"],["HTML"," CSS"," PHP"],["HTML"," CSS"," PHP"],["HTML"," CSS"," PHP"],["HTML"," CSS"," PHP"],["HTML"," CSS"," PHP"],["HTML"," CSS"," PHP"],["HTML"," CSS"," PHP"]];
    
    //users profile links
     var usersProfiles = ["#","#","#","#","#","#","#","#"];
    //adding the individual users boxes to the members section to only display first four members
    for(var i = 0;i<=3;i++){
        var membersDiv = '<div class = "box text-center users" id="users"><img class = "img-responsive" id="userimage" src = "'+usersImage[i]+'"/><h3>'+usersName[i]+'</h3><ul id = "skills"><li id = "skillItems">'+usersSkills[i]+'</li></ul><a id= "userProfile" href = "'+usersProfiles[i]+'" target="blank"><h4>VIEW PROFILE</h4></a></div>';
        $("#allmembers").append(membersDiv);
    }
    //adding event on the members button to display a number of members on each click
    var a=4;
    var b =4;
    $("#membersButton").click(function(){
        for(var i = a;i<a+b;i++){
            if(i==usersImage.length){
                 $("#membersButton").addClass("hidden");
                 break;
            }
     var membersDiv2 = '<div class = "box text-center users" id="users"><img class = "img-responsive" id="userimage" src = "'+usersImage[i]+'"/><h3>'+usersName[i]+'</h3><ul id = "skills"><li id = "skillItems">'+usersSkills[i]+'</li></ul><a id= "userProfile" href = "'+usersProfiles[i]+'" target="blank"><h4>VIEW PROFILE</h4></a></div>';
$("#allmembers1").append(membersDiv2);
             
     }
        a=a+b;
    });

    //Event section
       //Add active class when the event nav link is selected
            $(".navbar-ul li").on('click',function(){
                  $(".navbar-ul li.active").removeClass("active");
                    $(this).addClass("active");
               });
       //Upcoming event titles
           var upcomingTitle = ['NEXT MEETUP'];
       //Upcoming event agenda
         var upcomingMeetupAgenda = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']
            //upcoming event dates
           var upcomingDate = ['22nd SEPT. 2016'];

           //Past event titles
              var pastTitle = ['JULY MEETUP', 'AUGUST MEETUP'];
      //past event agenda
            var pastMeetupAgenda = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'];
      //Upcoming event dates
           var pastDate = ['22nd JULY. 2016', '22nd AUGUST. 2016'];

          //Adding each event detail to the event container
               for(var i = 0; i<upcomingTitle.length; i++){
               var upcomingMeetup = '<div id="upcoming" class"row"><div class="col-lg-8 col-md-8 col-sm-8 col-xs-12"><h3>'+upcomingTitle[i]+'</h3><p><h4>'+upcomingMeetupAgenda[i]+'</h4></p><br><a href="#" class="btn">REGISTER</a></div><div id="events-venue" class="col-lg-4 col-md-4 col-sm-4 col-xs-12"><div id="events-venue-info"><h3>FCC IKEJA MONTHLY MEETUP<br>'+upcomingDate[i]+'<br><span class="glyphicon glyphicon glyphicon-map-marker"></span> CODELAB COMPUTER VILLAGE, IKEJA. | 11:00 AM.</h3></div></div></div>';
               $('.event-container').append(upcomingMeetup);
           }
       for(var i = 0;i<pastTitle.length; i++){
                var pastMeetup = '<div id="past" class"row"><div class="col-lg-8 col-md-8 col-sm-8 col-xs-12"><h3>'+pastTitle[i]+'</h3><p><h4>'+pastMeetupAgenda[i]+'</h4></p><br><a href="#" class="btn">REGISTER</a></div><div id="events-venue" class="col-lg-4 col-md-4 col-sm-4 col-xs-12"><div id="events-venue-info"><h3>FCC IKEJA MONTHLY MEETUP<br>'+pastDate[i]+'<br><span class="glyphicon glyphicon glyphicon-map-marker"></span> CODELAB COMPUTER VILLAGE, IKEJA. | 11:00 AM.</h3></div></div></div>';
               $('.event-past').append(pastMeetup);
          }

            //Toggle the all, past and future events to either hide or show
                //When their respective links is clicked
                   $(".navbar-ul li").on('click', function(e){
                            e.preventDefault();
                           if($(".navbar-ul #next").hasClass('active')){
                                    $('.event-past #upcoming').show(1000);
                              }
                           if($(".navbar-ul #next").hasClass('active')){
                                   $('.event-past').hide(1000);
                              }
                          else{
                                    $('.event-past').show(1000);
                              }
                            if($(".navbar-ul #previous").hasClass('active')){
                                   $('#upcoming').hide(2000);
                              }
                           else{
                                   $('#upcoming').show(1000);
                                }
                        });
    });
     

