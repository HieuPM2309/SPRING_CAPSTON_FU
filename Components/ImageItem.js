import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    FlatList,
    Alert,
    ScrollView,
    TouchableOpacity

} from 'react-native';
import ImageModal from './ImageModal';
export default class ImageItem extends Component {
    
    _onChangeVisible = (bool)=>{
        this.props.onChangeVisible(bool);
    }

    render() {
        return (
            <TouchableOpacity
             onPress= {()=> this._onChangeVisible(true)}
            style={{
                borderWidth: 1,
                width: '33%',
                height: 100,
                padding: -10,
                marginTop: 1,
                marginBottom: 1,
                marginRight: 1
            }} >
                <Image source={require('../1.jpg')}
                    style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'contain',
                    }}>
                </Image>
                <ImageModal visibleStatus={this.props.visibleStatus} onChangeVisible={this.props.onChangeVisible}/>
            </TouchableOpacity>
        );

    }
}