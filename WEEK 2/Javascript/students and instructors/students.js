var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]
function students1(arr){
for(var i=0; i<students.length;i++){
console.log(students[i].first_name, students[i].last_name,students[i].first_name.length+students[i].last_name.length);
}
}
students1(students)

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }
for(var user in users){
    console.log(user);
    for(var i=0;i<users[user].length;i++){
        console.log((i+1) +" - "+ users[user][i].first_name,users[user][i].last_name,users[user][i].first_name.length+users[user][i].last_name.length);
    }
}
