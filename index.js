import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

class ModalSelector extends React.Component {
  select(i){
    const { labels, values, onSelect } = this.props;

    if(values){
      onSelect(values[i]);
    }else {
      onSelect(labels[i]);
    }
  }

  render() {
    const { isVisible, title, labels, values, headerColor,backgroundColor,textColor,headerTextColor } = this.props;
    const styles =  StyleSheet.create({
      modalStyle: {
        backgroundColor: backgroundColor,
        margin: 40,
        alignItems: undefined,
        justifyContent: undefined,
      },
      titleStyle: {
        padding: 15,
      },
      titleTextStyle : {
        color: headerTextColor,
        backgroundColor : 'transparent',
        fontFamily: 'System',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.361328,
        lineHeight:28,
      },
      labelContainerStyle: {
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
      },
      labelTextStyle: {
        padding: 16,
        color: textColor,
      }
    });

    return (
      <Modal isVisible={isVisible} style={ styles.modalStyle }>
        <View style={{ flex: 1 }}>
          <View style={[ styles.titleStyle, { backgroundColor: headerColor } ]}>
            <Text style={[ styles.titleTextStyle ]}>{ this.props.title }</Text>
          </View>

          <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              {
                labels.map((label, i) => {
                    var selected ="";

                    if(i==2)
                    {
                    selected="Selected ";
                    }
                  return (
                    <View key={i} style={ styles.labelContainerStyle }>
                      <TouchableOpacity  onPress={() => this.select(i)} >
                        <Text style={ styles.labelTextStyle }>
                        <Text >{ label } </Text>
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })
              }
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}

ModalSelector.defaultProps = {
  isVisible: false,
  title: 'Select',
  labels: null,
  values: null,
  headerColor: '#CD2C2E',
  backgroundColor:'white',
  textColor:'black',
  headerTextColor:'white'
  // backgroundColor:'black',
  // textColor:'white'
};

ModalSelector.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  labels: PropTypes.array,
  values: PropTypes.array,
  onSelect: PropTypes.func,
  headerColor: PropTypes.string,
  backgroundColor:PropTypes.string,
  textColor:PropTypes.string,
  headerTextColor:PropTypes.string,
};



export default ModalSelector;
