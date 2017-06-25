$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/sdwidney.json',
    dataType: 'jsonp',
    success: function(response) {
      for (course of response.courses.completed) {
        $('#badges').append('<div class="course"><h3>'+course.title+'</h3><img src="'+course.badge+'" /><a href="'+course.url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
      }
    }
  });

});
