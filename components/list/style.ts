import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 2
  },
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    margin: 1,
    padding: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 3,
    borderColor: '#8E8E8E',
    marginVertical: 5,


  },
  item: {
    fontFamily: 'lucida grande',
    fontSize: 18,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,

  },

  leftItemText: {
    color: '#4F4E4E',
    marginRight: 120,
    marginLeft: 5,
  },
  rightItemText: {
    color: '#010101 ',
    position: "absolute",
    paddingRight: 10,
    right: 0
  }
});

export default styles;