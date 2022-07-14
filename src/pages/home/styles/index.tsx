import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  notCityContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  notCityLottie:{
    width:200,
    marginBottom:20
  },
  addCity:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(142,85,164)',
    padding:12,
    borderRadius:100
    },
    addCityText:{
        fontFamily:'Nunito-Bold',
        color:'white',
        fontSize:18
    },
    notAddCityText:{
        fontFamily:'Nunito',
        fontSize:16,
        marginBottom:30
    }
});
