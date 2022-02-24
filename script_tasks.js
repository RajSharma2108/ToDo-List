let addTasks = $('#add')
let resetTask = $('#reset')
let sortTasks = $('#sort')
let cleanUpTasks = $('#cleanup')
let ulTasks = $('.tasks')
let inp = $('#input_field')

function addTask(){
    let task = $('<li>', {
        'class': 'tasks',
        text: inp.val()
    })
    task.click(() => {

        task.toggleClass('completed')
        
    })
    task.css(
        {
            'margin': '10px',
            'width': '500px',
            'background-color': 'bisque',
            'border': '1px solid bisque',
            'border-radius': '5px',
            'text-indent': '10px'
        }
    )
    ulTasks.append(task)
    inp.val('')

}

addTasks.click(addTask)

inp.keypress((e) => {
    if (e.which == 13) addTask()
})


resetTask.click(() => {
    // make input field empty again
    inp.val('')
})

sortTasks.click(() => {
    // sort tasks as incompleted tasks comes at top
    $('.tasks .completed').appendTo(ulTasks)
})

cleanUpTasks.click(() => {
    //remove all completed tasks from list
    $('.tasks .completed').remove()
})




