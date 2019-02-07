import React from "react"
import BaseLayout from "../components/layouts/BaseLayout"
import axios from "axios"

class Index extends React.Component {    

    static async getInitialProps(){
        let userData={}
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
            userData=response.data
        } catch (error) {
            console.log(err)
        }
       
       return {initialData:[1,2,3,4], userData}
    }

    constructor(){
        super();
        this.state = {
            title : "I am Index page"
        }
    }

    render(){
        const {title} = this.state
        const {userData , initialData } = this.props
        return (
            <BaseLayout>
                <h1>Index Page class</h1>
                <h2>{title}</h2>
                <h2>{userData.title}</h2>
                <button onClick={()=>{this.setState({title:"Changed Title"})}}>Change Title</button>
            </BaseLayout>
        )
    }
}
export default Index;