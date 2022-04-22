import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./fire";
import { useStateValue } from "./stateManagement/StateProvider";
import { firebaseApp } from "./fire";
// HOME OR BASIC COMPONENTS
import Footer from "./components/HeadFoot/Footer";
import Header from "./components/HeadFoot/Header";
import HeaderBar from "./components/HeadFoot/HeaderBar";
import HeadNav from "./components/HeadFoot/HeadNav";
import Slider from "./components/HeadFoot/Slider";
import HandMadeGfts from "./components/home/HandMadeGfts";
import Personalized from "./components/home/Personalized";
import Homedecor from "./components/home/Homedecor";
import Bar from "./components/comp1/Bar";
import AboutUs from "./components/pages/AboutUs";
import HowbookOdr from "./components/pages/HowbookOdr";
import ConatactUs from "./components/pages/ConatactUs";
import TermCond from "./components/pages/TermCond";
import PayReturn from "./components/pages/PayReturn";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
// HAND MADE
import Birthday from "./components/pages/handmade/Birthday";
import Love from "./components/pages/handmade/love";
import Baby from "./components/pages/handmade/Baby";
import Anniversary from "./components/pages/handmade/Anniversary";
import Book from "./components/pages/handmade/Book";
import Friendship from "./components/pages/handmade/Friendship";
// PERSONALIZED
import Diary from "./components/pages/personalized/Diary";
import KeyChain from "./components/pages/personalized/KeyChain";
import Pillow from "./components/pages/personalized/Pillow";
import PrintedCup from "./components/pages/personalized/PrintedCup";
import Tshirts from "./components/pages/personalized/Tshirts";
import Wallets from "./components/pages/personalized/Wallets";
// HOME DECORATION
import DreamCatcher from "./components/pages/homedeco/DreamCatcher";
import WindChain from "./components/pages/homedeco/WindChain";
import WoodenDeco from "./components/pages/homedeco/WoodenDeco";
// ADMIN IMPORT
import AdNav from "./components/admin/Navbar";
import AdHome from "./components/admin/Home";
import Login from "./components/pages/Login";
import ProdList from "./components/admin/ProdList";
import HandMade from "./components/admin/HandMade";
import HomeDeco from "./components/admin/HomeDeco";
import AdPersonalized from "./components/admin/Personalized";
import CreateHandProd from "./components/admin/CreateHandProd";
import CreatePersonalized from "./components/admin/CreatePersonalized";
import CreateHomeDeco from "./components/admin/CreateHomeDeco";
import Showtable from "./components/admin/Showtable";
import UserDetail from "./components/pages/UserDetail";
import ShowUserDetails from "./components/pages/ShowUserDetails";
import Checkout from "./components/pages/Checkout";
import Subscribers from "./components/admin/Subscribers";
import Querries from "./components/admin/Querries";
import Contact from "./components/pages/Contact";

function App() {
  const [{ user, admin, userDetails }, dispatch] = useStateValue();
  const [details, setdetails] = useState({
    userid: "",
    fname: "",
    email: "",
    address: "",
    phno: "",
  });
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("User is >>", authUser);
      if (authUser) {
        if (authUser.uid === "8mMa5pwYKOXZXsIbT6JBfI2KhkE2") {
          dispatch({
            type: "Set_Admin",
            admin: true,
          });
          dispatch({
            type: "Set_User",
            user: authUser,
          });
        } else {
          var dbRef = firebaseApp.database().ref("/Users");
          dbRef.on("value", (snapshot) => {
            const db = snapshot.val();
            var arr = [];
            Object.keys(db).map((key) => arr.push(db[key]));
            arr.map((val) => {
              if (val.userid === authUser.uid) {
                setdetails({
                  ...details,
                  userid: authUser.uid,
                  fname: val.fname,
                  address: val.address,
                  phno: val.phno,
                  email: authUser.email,
                });
              }
            });
          });
          dispatch({
            type: "Set_User",
            user: authUser,
          });
          dispatch({
            type: "Set_User_Detail",
            userDetails: {
              userid: details.userid,
              fname: details.fname,
              email: details.email,
              address: details.address,
              phno: details.phno,
            },
          });
        }
      } else {
        dispatch({
          type: "Set_User",
          user: null,
        });
        dispatch({
          type: "Set_Admin",
          admin: false,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Home Route Start*/}
          <Route exact path="/">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Slider />
            <HandMadeGfts />
            <Personalized />
            <Bar />
            <Homedecor />

            <Footer />
          </Route>
          {/* Home Route End*/}
          {/* Checkout page Start*/}
          <Route exact path="/checkout">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Checkout />
          </Route>
          {/* Checkout page End*/}

          {/*UserDetail start  */}
          {user ? (
            <Route exact path="/showdetail">
              <HeaderBar />
              <Header />
              <HeadNav />
              <ShowUserDetails data={user} />
              <Footer />
            </Route>
          ) : (
            <Route exact path="/login">
              {/* <HeaderBar /> */}
              <Login />
            </Route>
          )}
          {user ? (
            <Route exact path={`${user ? "/userdetail" : "/login"}`}>
              <HeaderBar />
              <Header />
              <HeadNav />
              <UserDetail data={user} />
              <Footer />
            </Route>
          ) : (
            <Route exact path="/login">
              <Login />
            </Route>
          )}

          {/*UserDetail end  */}
          {/* About Us start  */}
          <Route exact path="/aboutus">
            <HeaderBar />
            <Header />
            <HeadNav />
            <AboutUs />
            <Footer />
          </Route>
          {/* About Us end  */}

          {/* Contact Us start  */}
          <Route exact path="/contactus">
            <HeaderBar />
            <Header />
            <HeadNav />
            <ConatactUs />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Contact />
            <Footer />
          </Route>
          {/* Contact Us end  */}

          {/* Term and Condition start  */}
          <Route exact path="/termcond">
            <HeaderBar />
            <Header />
            <HeadNav />
            <TermCond />
            <Footer />
          </Route>
          {/* Term and Condition end  */}

          {/* How to Book Order start  */}
          <Route exact path="/howbookodr">
            <HeaderBar />
            <Header />
            <HeadNav />
            <HowbookOdr />
            <Footer />
          </Route>
          {/* How to Book Order end  */}

          {/* Payment and Return Policy start  */}
          <Route exact path="/paymentreturnpolicy">
            <HeaderBar />
            <Header />
            <HeadNav />
            <PayReturn />
            <Footer />
          </Route>
          {/* Payment and Return Policy end  */}

          {/* Privacy Policy start  */}
          <Route exact path="/privacypolicy">
            <HeaderBar />
            <Header />
            <HeadNav />
            <PrivacyPolicy />
            <Footer />
          </Route>
          {/* Privacy Policy end  */}

          {/* Login SignUp Start  */}
          <Route exact path="/login">
            {/* <HeaderBar /> */}
            <Login />
          </Route>
          {/* Login SignUp End  */}

          {/* HAND MADE GIFTS  START*/}
          <Route path="/birthday_theme">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Birthday />
            <Footer />
          </Route>
          <Route path="/love_theme">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Love />
            <Footer />
          </Route>
          <Route path="/baby_theme">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Baby />
            <Footer />
          </Route>
          <Route path="/anniversary_theme">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Anniversary />
            <Footer />
          </Route>
          <Route path="/book_theme">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Book />
            <Footer />
          </Route>
          <Route path="/friendship_theme">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Friendship />
            <Footer />
          </Route>
          {/* HAND MADE GIFTS  END*/}

          {/* PERSONALIZED GIFTS  START*/}
          <Route path="/keychain">
            <HeaderBar />
            <Header />
            <HeadNav />
            <KeyChain />
            <Footer />
          </Route>
          <Route path="/printedcup">
            <HeaderBar />
            <Header />
            <HeadNav />
            <PrintedCup />
            <Footer />
          </Route>
          <Route path="/tshirts">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Tshirts />
            <Footer />
          </Route>
          <Route path="/diary">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Diary />
            <Footer />
          </Route>
          <Route path="/pillow">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Pillow />
            <Footer />
          </Route>
          <Route path="/wallets">
            <HeaderBar />
            <Header />
            <HeadNav />
            <Wallets />
            <Footer />
          </Route>
          {/* PERSONALIZED GIFTS  END*/}

          {/* HOME DECORATION GIFTS  START*/}
          <Route path="/dreamcatcher">
            <HeaderBar />
            <Header />
            <HeadNav />
            <DreamCatcher />
            <Footer />
          </Route>
          <Route path="/woodendecor">
            <HeaderBar />
            <Header />
            <HeadNav />
            <WoodenDeco />
            <Footer />
          </Route>
          <Route path="/windchain">
            <HeaderBar />
            <Header />
            <HeadNav />
            <WindChain />
            <Footer />
          </Route>
          {/* HOME DECORATION GIFTS  END*/}

          {/* Admin start */}

          <Route exact path="/admin/">
            {!admin ? <Login /> : <AdNav />}

            <AdHome />
          </Route>
          <Route path="/admin/products">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <ProdList />
              </>
            )}
          </Route>

          <Route path="/admin/subscribers">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Subscribers />
              </>
            )}
          </Route>
          <Route path="/admin/quiries">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Querries />
              </>
            )}
          </Route>
          <Route path="/admin/handmade">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <HandMade />
              </>
            )}
          </Route>
          <Route path="/admin/homedeco">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <HomeDeco />
              </>
            )}
          </Route>
          <Route path="/admin/personalized">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <AdPersonalized />
              </>
            )}
          </Route>
          <Route path="/admin/createhandmadeproduct">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <CreateHandProd />
              </>
            )}
          </Route>
          <Route path="/admin/createpersonalizedproduct">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <CreatePersonalized />
              </>
            )}
          </Route>
          <Route path="/admin/createhomedecoproduct">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <CreateHomeDeco />
              </>
            )}
          </Route>
          <Route path="/admin/showtable">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable category="yo yo" heading="I am heading" />
              </>
            )}
          </Route>
          {/* Show Product in table start  */}

          {/* HandMade Products Start   */}
          <Route path="/admin/display/birthday">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Birthday Theme" category="Birthday" />
              </>
            )}
          </Route>
          <Route path="/admin/display/love">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Love Theme" category="Love" />
              </>
            )}
          </Route>
          <Route path="/admin/display/baby">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Baby Theme" category="Baby" />
              </>
            )}
          </Route>
          <Route path="/admin/display/anniversary">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Anniversary Theme" category="Anniversary" />
              </>
            )}
          </Route>
          <Route path="/admin/display/book">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Book Theme" category="Book" />
              </>
            )}
          </Route>
          <Route path="/admin/display/friendship">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Friendship Theme" category="Friendship" />
              </>
            )}
          </Route>

          {/* HandMade Products End   */}

          {/* Personalized Products Start   */}
          <Route path="/admin/display/keychain">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Key Chains" category="KeyChain" />
              </>
            )}
          </Route>
          <Route path="/admin/display/diary">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Diary" category="Diary" />
              </>
            )}
          </Route>
          <Route path="/admin/display/printedcup">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Printed Cups" category="PrintedCup" />
              </>
            )}
          </Route>
          <Route path="/admin/display/pillow">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Pillows" category="Pillow" />
              </>
            )}
          </Route>
          <Route path="/admin/display/tshirts">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="T-Shirts" category="TShirt" />
              </>
            )}
          </Route>
          <Route path="/admin/display/wallets">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Wallets" category="Wallets" />
              </>
            )}
          </Route>
          {/* Personalized Products End   */}
          {/* Home Deco Products Start   */}
          <Route path="/admin/display/dreamcatcher">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Dream Catcher" category="DreamCatcher" />
              </>
            )}
          </Route>
          <Route path="/admin/display/woodendeco">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Wooden Decoration" category="WoodenDeco" />
              </>
            )}
          </Route>
          <Route path="/admin/display/windchime">
            {!admin ? (
              <Login />
            ) : (
              <>
                <AdNav />
                <Showtable heading="Wind Chimes" category="WindChime" />
              </>
            )}
          </Route>
          {/* Home Deco Products End   */}
          {/* Show Product in table End  */}

          {/* Admin End */}
        </Switch>
      </div>
    </Router>
  );
}
// List of pages -->
export default App;
