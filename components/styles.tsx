import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainView : {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(95, 102, 227, 1)",
    width: "100%",

  },

  subView1 : {
    flex: 2,
    justifyContent: "space-evenly", // vertical 
    alignItems: "flex-start", // horizontal 
    backgroundColor: "rgba(166, 220, 137, 1)",
    width: "100%",
    height: "100%",
    paddingLeft: 15,

  },

  logo : {
    width: 150,
    height: 150,
  },

 subView3 : {
    flex: 2,
    flexDirection:"row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgba(209, 131, 221, 1)",
    width: "100%",
  },

 subView2 : {
    flex: 1,
    flexDirection:"row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(238, 203, 60, 1)",
    width: "100%",
  },

  homepage: {
    fontSize: 40,
    fontFamily: 'American Typewriter',
  },

  imagebutton : {
    width: 200,
    height: 200
  }
});