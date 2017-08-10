import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// import person from './image/person.png';


class AlbumList extends Component {

    state = {
        albums: []
    }

    componentWillMount() {
        const albumsList = albums;
        // axios.get('https://rallycoding.herokuapp.com/api/music_ablums')
        //     .then((response) => {
        //         this.setState({ ablums: response.data })
        //     })
        this.setState({ albums: albumsList })

    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }
    render() {
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}
const albums = [
    {
        artist: "Taylor swift",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7tpSEvpN0LYrNaMdrtVNTARKsMl2jh-nOkozJjmq2GCv4blBLA',
        thumbnail_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1iwix1NKc4pfhCZw0ILxwuARwilsfrw3iethzVX60ZugBabXAQ',
        title: "FearLess",
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7tpSEvpN0LYrNaMdrtVNTARKsMl2jh-nOkozJjmq2GCv4blBLA',


    }, {
        artist: "Taylor swift",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5a1zcOWxw0w6N9EB6yUIFZxZ8s6kOdRmgJ0nvD8mJ7tUCAYCwug',
        thumbnail_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1iwix1NKc4pfhCZw0ILxwuARwilsfrw3iethzVX60ZugBabXAQ',
        title: "Fear",
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7tpSEvpN0LYrNaMdrtVNTARKsMl2jh-nOkozJjmq2GCv4blBLA',


    }, {
        artist: "Taylor swift",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPA-xBoEE_wPDAiULQBB--LNDn-Rcn1uX5Jn1IxWrSQBUEYEhYQ',
        thumbnail_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1iwix1NKc4pfhCZw0ILxwuARwilsfrw3iethzVX60ZugBabXAQ',
        title: "Less",
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7tpSEvpN0LYrNaMdrtVNTARKsMl2jh-nOkozJjmq2GCv4blBLA',

    },
];
export default AlbumList;