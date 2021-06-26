const ADD_POST = 'ADD_POST';
const CHANGE_POST = 'CHANGE_POST';

let initialState = {

    posts: [
        {id:1,message:'Hi how are you',likeCount:15},
        {id:2,message:'I am fine',likeCount:35},
        {id:3,message:'How old are you',likeCount:25},
        {id:4,message:'Thank you',likeCount:5},
    ],
    newPostText: '',

}


const profileReducer = (state = initialState ,action) => {

    switch (action.type) {

        case ADD_POST:

            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';

            return state;

        case CHANGE_POST:

            state.newPostText = action.text;
            return state;

        default:

            return state;
    }
}

export default profileReducer;