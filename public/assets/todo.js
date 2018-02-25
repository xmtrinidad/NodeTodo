$todoListItem = $('.Todo-list__item');
$form = $('form');

$form.on('submit', function(){
    const $todoInput = $('#user_todo');
    const todo = {todo: $todoInput.val()};
    $.ajax({
        type: 'POST',
        url: '/index',
        data: todo,
        success: function(myTodos){

            //do something with the data via front-end framework
            location.reload();

        }
    });
    return false;
});

$todoListItem.on('click', function(){
    const $todoClicked = $(this).text().replace(/ /g, '-');
    $.ajax({
        type: 'DELETE',
        url: `/${$todoClicked}`,
        success: function(myTodos){

            //do something with the data via front-end framework
            location.reload();

        }
    });
});