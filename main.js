$(document).ready(function () {
    
    var userList= [];
    $('#tasker').submit(function (event) {
        event.preventDefault();
        
    var rand = new taskObject($('#name').val(), $('#date').val(), $('#assigned').val());
        userList.push(rand);
        
    var contentDisplay= "<tr><td>"+"<span class='jname'>"+rand.name+"</span>"+"<span class='jdate'>"+rand.date+"</span>"+"<span class='jassigned'>"+rand.assigned+"</span>"+"</td></tr>";
        
    $('.task-container').append(contentDisplay);
        clearInputs();
        console.log(rand);

    });
    
    
    function taskObject(name, date, assigned) {
  this.name = name;
  this.date = date;
  this.assigned = assigned;
}
        
    function clearInputs(){
$("#name").val('');
$("#date").val('');
$("#assigned").val('');
}
    
});
