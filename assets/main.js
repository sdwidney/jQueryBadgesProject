$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/sdwidney.json',
    dataType: 'jsonp',
    success: function(response) {
      var $badges = $('#badges');
      response.courses.completed.forEach(function(course){
        var $course = $('<div />', {
          'class': 'course'
        }).appendTo($badges);
        $('<h3 />', {
          text: course.title
        }).appendTo($course);
        $('<img />', {
          src: course.badge
        }).appendTo($course);
        $('<a />', {
          'class': 'btn btn-primary',
          target: '_blank',
          href: course.url,
          text: 'See Course'
        }).appendTo($course);
      });

      // for (course of response.courses.completed) {
      //   $('#badges').append('<div class="course"><h3>'+course.title+'</h3><img src="'+course.badge+'" /><a href="'+course.url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
      // }
    }
  });

});
