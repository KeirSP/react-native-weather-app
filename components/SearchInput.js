import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

export default class SearchInput extends React.Component {
    handleChangeText = (newLocation) => {
        this.props.location = newLocation;
    }

    render() {
        const { placeholder } = this.props;
        const { text } = this.state;


        return (
            <View style = {styles.container}>
                <TextInput
                    autoCorrect = {false}
                    placeholder = {this.props.placeholder}
                    placeholderTextColor = "white"
                    style = {styles.textInput}
                    clearButtonMode = "always"
                    onChangeText = {this.handleChangeText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    textInput: {
        flex: 1,
        color: 'white',
    }
})