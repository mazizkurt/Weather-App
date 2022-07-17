import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  notCityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notCityLottie: {
    width: 200,
    marginBottom: 20,
  },
  addCity: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(142,85,164)',
    padding: 12,
    borderRadius: 100,
  },
  addCityText: {
    fontFamily: 'Nunito-Bold',
    color: 'white',
    fontSize: 18,
  },
  notAddCityText: {
    fontFamily: 'Nunito',
    fontSize: 16,
    marginBottom: 30,
  },
  search: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  searchView: {
    width: '90%',
    border: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 45,
    borderColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    width: '90%',
    fontFamily: 'Nunito-Regular',
  },
  result: {
    width: '100%',
    alignItems: 'center',
  },
  resultView: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultText: {
    fontFamily: 'Nunito-SemiBold',
  },
  citysView: {
    flex: 1,
  },
  headerCitysView: {
    flex: 0.1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    
  },
  headerCitysRight:{
    flexDirection:'row',
  },
  headerCitysContent:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  headerCitysTitle: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 25,
  },
  contentCitysView: {
    flex: 0.9,
   
  },
  contentScrollCitysView:{
    paddingLeft: 20,
    paddingRight: 20,
  },
  citysCard: {
    backgroundColor: '#FCFCFC',
    borderRadius: 5,
    padding: 10,
    width: width / 2 - 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.122,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom:20

  },
  citysContentCard:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  widgetHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  weatherText:{
    fontSize:20,
    fontFamily:'Nunito-ExtraBold'
  },
  humidityText:{
    fontSize:13,
    fontFamily:'Nunito'

  },
  weatherDescText:{
    fontFamily:'Nunito'
  },
  weatherNameText:{
    fontFamily:'Nunito-Bold',
    fontSize:16

  }
});
