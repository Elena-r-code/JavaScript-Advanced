$(document).ready(function(){

function getAllPosts(url){
    return new Promise((resolve,reject) => {
        $.ajax({
            url: url,
            success: (response) => {
                resolve(response);
                
            },
            error: (err) => {
                reject(err);
            }
        });
    });
}

function getPostWithIdOne(posts){
    if(!posts || posts.length === 0){
        throw new Error("Error");
    }
    let postIdOne = posts.filter(post => post.id === 1);
    postIdOne.forEach(post =>  {
        $("#userId").text(post.userId);
        $("#id").text(post.id);
        $("#title").text(post.title);
        $("#body").text(post.body);

        return new Promise((resolve, reject) => {
            $.ajax({
                url: `https://jsonplaceholder.typicode.com/users/${postIdOne[0].userId}`, 
                success: (successResponse) => {
                    $("#userUserId").text(successResponse.id);
                    $("#nameId").text(successResponse.name);
                    $("#usernameUser").text(successResponse.username);
                    $("#email").text(successResponse.email);
                    $("#street").text(successResponse.address.street);
                    $("#suite").text(successResponse.address.suite);
                    $("#city").text(successResponse.address.city);
                    $("#zipcode").text(successResponse.address.zipcode);
                    $("#phone").text(successResponse.phone);
                    $("#website").text(successResponse.website);
                    $("#company").text(successResponse.company.name);
                    $("#catchPhrase").text(successResponse.company.catchPhrase);
                    $("#bs").text(successResponse.company.bs);
                    resolve(successResponse);
                },
                error: (errorResponce) => {
                    reject(errorResponce);
                }
            })
        })
    })
}

   


getAllPosts("https://jsonplaceholder.typicode.com/posts")
.then(documents => {
    getPostWithIdOne(documents)
})

.catch(err => console.log(err));





})

