import React, { createContext, useContext, useState } from 'react';
import {
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';

import Home from './screens/HomeScreen';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>To Adulthood!</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={require('./assets/HomeScreenLogo.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Main = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <View style={styles.tipOfTheDay}>
          <Text style={styles.tipOfTheDayText}>Tip of the Day!</Text>
          <Text style={{ fontSize: 25, fontFamily: 'Georgia', color: 'white' }}>
            Small reductions in spending add up to big savings over time.
          </Text>
        </View>

        <View style={styles.gap}></View>

        <View style={styles.paths}>
          <Text style={styles.tipOfTheDayText}>Paths</Text>
          <Text style={{ fontSize: 20, fontFamily: 'Georgia', color: 'white'  }}>
            Learn knowledge needed as an adult
          </Text>
        </View>

        <View style={styles.layout}>
          <View style={[styles.box, { backgroundColor: '#5C9EAD' }]}>
            <TouchableOpacity onPress={() => navigation.navigate('Business')}>
              <Text style={styles.buttonText}>Business</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.box, { backgroundColor: '#a9a9a9' }]}>
            <TouchableOpacity onPress={() => navigation.navigate('Finance')}>
              <Text style={styles.buttonText}>Finance</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.box, { backgroundColor: '#5C9EAD' }]}>
            <TouchableOpacity onPress={() => navigation.navigate('Legal')}>
              <Text style={styles.buttonText}>The Legal System</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gap}></View>

    <View style = {{flexDirection: "row"}}>
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gap}></View>

        <View style={styles.settings}>
          <Text style={styles.buttonText}>Settings</Text>
        </View>
    </View>
      </ScrollView>
    </View>
  );
};

const Business = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.businessContainer}>
      <ScrollView vertical>
        <View style={styles.top}>
          <Text style={styles.topText}>Business</Text>
        </View>

        <View style={styles.options}>
          <View style={styles.questions}>
            <TouchableOpacity>
              <Text>How do I write formal emails?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>

          <View style={styles.questions}>
            <TouchableOpacity>
              <Text>How to make a resume</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>

          <View style={styles.questions}>
            <TouchableOpacity>
              <Text>
                How do I foster connections with coworkers and mentors?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const Finances = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.businessContainer}>
      <ScrollView vertical>
        <View style={styles.top}>
          <Text style={styles.topText}>Finances</Text>
        </View>

        <View style={styles.options}>
          <View style={styles.questions}>
            <TouchableOpacity>
              <Text>How do I make a monthly budget?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>

          <View style={styles.questions}>
            <TouchableOpacity>
              <Text>What taxes do I need to pay and how do I pay them?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>

          <View style={styles.questions}>
            <TouchableOpacity>
              <Text>How much should I save for emergencies?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>

          <View style={styles.questions}>
            <TouchableOpacity onPress={() => navigation.navigate('CreditScore')}>
              <Text>What is a credit score?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const LegalSystem = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.businessContainer}>
      <ScrollView vertical>
        <View style={styles.top}>
          <Text style={styles.topText}>The Legal System</Text>
        </View>

        <View style={styles.options}>
          <View style={styles.questions}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CarAccidents')}>
              <Text>Car accidents</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>

          <View style={styles.questions}>
            <TouchableOpacity>
              <Text>What do I do if I have been in a motor accident?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>

          <View style={styles.questions}>
            <TouchableOpacity>
              <Text>How do I deal with being sued?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>

          <View style={styles.questions}>
            <TouchableOpacity>
              <Text>How do I contact and hire a lawyer?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.questionsGap}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <Image
        source={require('./assets/Profile.png')}
        style={styles.profilePic}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.profileInfoText}>Name{"\n"}</Text>
        <Text style={styles.profileInfoText}>Email{"\n"}</Text>
        <Text style={styles.profileInfoText}>Password</Text>
      </View>
    </View>
  );
};

const CarAccidents = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Car Accidents</Text>
      </View>
<View style = {{padding: 10}}>
      <Text style={styles.questionsText}>
        In a car accident, many things could happen or be affected by it. This
        specific page will be based on what to do after in a legal context.
        Immediately after the crash Exit the vehicle as soon as safely
        possible.{"\n"}{"\n"}Do not move the vehicle unless it is blocking traffic, and turn
        on your hazard lights. Do not leave the scene! {"\n"}{"\n"}If so, you may be subject
        to criminal investigation. Instead, do your best to document the scene
        and obtain the information of witnesses or other drivers. Take pictures
        and videos if possible, and make a claim within 24 hours of the event.
      </Text>
      </View>

      <Image
        source={require('./assets/CarCrasg.png')}
        style={{height: 300, width: 300, margin: 45}}
      />

    </View>
  );
};

const CreditScore = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CreditScore</Text>
      </View>
          <ScrollView vertical>
<View style = {{padding: 10}}>
      <Text style={styles.questionsText}>
  
       Essentially, a credit score is how lenders and banks assess how responsible you are with your money and your ability to manage your finances. It is important to have a good credit score; lower risk borrowers are more favorable due to the fact that they have a better “reputation” with the banks and are more likely to pay them back. One very important way of keeping your credit score high is always  paying your bills on time. They want to see that you are likely to repay them and that you are not in too much debt.{"\n"}{"\n"}

Keeping your credit score high is vital to having overall easier approval, as well as better rates and fees offered by your bank. Your credit score also affects your insurance score which can impact your ability to have rental housing and/or a rental car, or even life insurance. On the flip side, it also affects your financing which means you can get a better deal on mortgages or auto loans. {"\n"}

Credit scores generally are a number between 300 to 900. In Canada, the average credit score is around 650, which is fairly decent. {"\n"}{"\n"}


What are some things that I can do?{"\n"}{"\n"}

1. Make my payments on time{"\n"}
2. Pay more using cash than credit{"\n"}
3. You are more likely to have an easier time budgeting and keeping track of your spending, {"\n"}
4. Learn to budget {"\n"}
5. Try to not close old accounts or open new accounts too much{"\n"}
6. The older your accounts, the more history is available to be drawn on {"\n"}
7. Use 30% or less of your available credit {"\n"}
8. Your credit utilization rate is the ratio of how much you’ve spent versus the limit of your card. The ideal ratio to be at is 30% and under! 
{"\n"}{"\n"}

      </Text>
      </View>
       <Image
        source={require('./assets/CreditScore.png')}
        style={{height: 140, width: 360, margin: 20}}
      />
</ScrollView>
    </View>
  );
};

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={HomeScreen} />
    <Stack.Screen name="Home" component={Main} />
    <Stack.Screen name="Business" component={Business} />
    <Stack.Screen name="Finance" component={Finances} />
    <Stack.Screen name="Legal" component={LegalSystem} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="CarAccidents" component={CarAccidents} />
    <Stack.Screen name="CreditScore" component={CreditScore} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#e5e5e5',
  },
  title: {
    fontSize: 32,
    marginBottom: 2,
    fontWeight: '600',
    fontFamily: 'Georgia',
    color: 'white',
  },
  banner: {
    height: 600,
    width: 600,
    marginBottom: 90,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  profilePic: {
    height: 300,
    width: 300,
    marginBottom: 100,
    marginHorizontal: 37,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#EEEEEE',
  },
  button: {
    width: '100%',
    backgroundColor: '#5C9EAD',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Georgia',
    color: 'white',
  },
  titleContainer: {
    backgroundColor: '#326273',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Georgia',
  },
  tipOfTheDayText: {
    fontSize: 50,
    fontWeight: '500',
    color: 'white',
    fontFamily: 'Optima',
  },
  tipOfTheDay: {
    backgroundColor: '#E39774',
    padding: 75,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paths: {
    backgroundColor: '#326273',
    padding: 40,
    paddingHorizontal: 100,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'left',
  },
  box: {
    backgroundColor: 'white',
    height: 100,
  },
  gap: {
    backgroundColor: 'light blue',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    backgroundColor: '#E39774',
    padding: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings: {
    backgroundColor: '#E39774',
    padding: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  businessContainer: {
    padding: 12,
    height: '100%',
    backgroundColor: '#5C9EAD',
  },
  top: {
    backgroundColor: '#E39774',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  topText: {
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Optima',
  },
  options: {
    marginVertical: 30,
    flex: 1,
  },
  profileInfo: {
    width: '100%',
    padding: 1,
    borderRadius: 16,
    alignItems: 'center',
  },
  profileInfoText: {
    fontSize: 30,
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Optima',
  },
  questions: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'left',
    justifyContent: 'center',
  },
  questionsGap: {
    backgroundColor: 'light blue',
    padding: 2,
    borderRadius: 5,
    alignItems: 'left',
    justifyContent: 'center',
  },
  questionsText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    fontFamily: 'Optima',
  },
});
