import React, { Component } from 'react';
import RandomCategory from "./randomCategory";
import MainSlider from "./mainSlider";
import Posts from "../../layout/Posts";
import api from "../../../api";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        };
        this.fetchPosts();
    }

    fetchPosts() {
        api.Content.postsByPage(1).then(
            res => {
                this.setState({posts: res});
            },
            error => {
                console.warn(error);
            }
        );
    }

	render() {
        return [
            <MainSlider
                data={this.props.data}
                key="main-slider"
            />,
            <RandomCategory
                key="random-category"
            />,
            <Posts
                more={true}
                moreLink="/posts?page=2"
                heading="പുതിയ പോസ്റ്റുകൾ"
                footerMore={true}
                footerLink={'/posts?page=2'}
                footerMoreText='More'
                key="latest-posts"
                posts={this.state.posts}
            />
        ];
	};
}

export default Home;
