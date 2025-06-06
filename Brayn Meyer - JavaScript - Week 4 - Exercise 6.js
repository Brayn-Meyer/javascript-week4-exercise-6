// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object
// - If userId is negative or zero, reject with an error
// - User data should include: id, name, email, and registrationDate
function user_data_maker(id, name, email, registrationDate){
    return { id:id, name:name, email:email, registrationDate:registrationDate }
}
function fetching_data(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            try {
                let user_array = [user_data_maker(45345, "John", "John@gmail.com", "04/02/88"), user_data_maker(54666, "Luke", "Luke@gmail.com", "04/06/98"), user_data_maker(76886, "Henry", "Henry@gmail.com", "07/09/78")]
                user_array.forEach(function(object) {
                    if (object.id <= 0){
                        reject("User data is invalid.")
                    }
                })
                resolve(user_array)
            }
            catch {
                reject("No data has been fetched.")
            }
        }, 1500);
    })
}
fetching_data()
    .then(f=>{
        let data = f
    })
    .catch(e=>{
        console.error(e)
    })

// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error
function post_data_maker(id, title, content, userID){
    return{ id: id, title: title, content: content, userID: userID }
}
function fetching_user_posts(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            try{
                let post_array = [post_data_maker("098", "cats", "pictures of cats", "43535"), post_data_maker("098", "cats", "pictures of cats", "78905"), post_data_maker("098", "cats", "pictures of cats", "98764")]
                post_array.forEach(function(object) {
                    if (object.userID == null){
                        reject("Posts are invalid.")
                    }
                })
                resolve(post_array)
            } catch {
                reject("Posts are invalid.")
            }
        }, 1000);
    })
}
fetching_user_posts()
    .then(f=>{
        let users_data = f
    })
    .catch(e=>{
        console.error(e)
    })

// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain
function multiple_promise_chain(){
    return new Promise((resolve, reject)=>{
        let chain_user_data = []
        let chain_post_data = []
        fetching_data(true, 2000)
        .then(f=>{
            chain_user_data = f
        }) .catch(e=>{
            reject("User data is invalid")
        })
        fetching_user_posts(1500)
        .then(f=>{
            chain_post_data = f
        }) .catch(e=>{
            reject("Post data is invalid")
        })
        setTimeout(()=>{
            try {
            resolve(chain_user_data + chain_user_data)
        }   catch {
            reject("Combined data is invalid")
        }
        }, 2000)
    })
}
multiple_promise_chain()
.then(f=>{
    let combined_data = f
}) .catch(e=>{
    console.error(e)
})

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data
async function multiple_await_promise_chain(){
    let chain_user_data = []
    let chain_post_data = []
    try {
        chain_user_data = await fetching_data()
        chain_post_data = await fetching_user_posts()
        return chain_user_data + chain_post_data
    } catch{
        return "Error has occured"
    }
}
multiple_await_promise_chain()
.then(f=>{
    let combined_data = f
}) .catch(e=>{
    console.error(e)
})

// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users
function multiple_users_parallel(){
    let successfull_userIDs = []
    const promise1 = new Promise((resolve, reject) => {
        let data = 34534
        if (data <= 0){
            console.error("User data is invalid.")
            resolve('')
        } else {
            resolve(data)
        }
    }) 
    const promise2 = new Promise((resolve, reject) => {
        let data = 67544
        if (data <= 0){
            console.error("User data is invalid.")
            resolve('')
        } else {
            resolve(data)
        }
    }) 
    const promise3 = new Promise((resolve, reject) => {
        let data = 34576
        if (data <= 0){
            console.error("User data is invalid.")
            resolve('')
        } else {
            resolve(data)
        }
    }) 
    const promise4 = new Promise((resolve, reject) => {
        let data = 76886
        if (data <= 0){
            console.error("User data is invalid.")
            resolve('ID undefined.')
        } else {
            resolve(data)
        }
    })
    Promise.all([promise1, promise2, promise3, promise4])
    .then(f=>{
        console.log(f)
    })
}
multiple_users_parallel()

// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately
function unify_data(user, post){
    return Object.assign(user, post)
}
function fetching_user_and_post_data(){
    try{
        let user_data = [user_data_maker(45345, "John", "John@gmail.com", "04/02/88"), user_data_maker(54666, "Luke", "Luke@gmail.com", "04/06/98"), user_data_maker(76886, "Henry", "Henry@gmail.com", "07/09/78")]
        let post_data = [post_data_maker(45345, "cats", "pictures of cats", "43535"), post_data_maker(54666, "cats", "pictures of cats", "78905"), post_data_maker(76886, "cats", "pictures of cats", "98764")]
        let x = 0
        for (i of user_data){
            console.log(unify_data(i, post_data[x]))
            x++
        }
    } catch {
        console.error("Data is invalid.")
    }
}
fetching_user_and_post_data()

// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling
