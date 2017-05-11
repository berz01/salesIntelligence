var Api = {
  getProfile: function() {
    var profile = {};

    return fetch('https://salesintel.herokuapp.com/api/v1/linkedin/maincall')
    .then(response => response.json())
    .then(data => {
      var firstName = data.currentShare.author.firstName;
      var lastName = data.currentShare.author.lastName;
      var title = data.positions.values[0].title;
      var company = data.positions.values[0].company.name;
      var pictureUri = data.pictureUrl;

      profile.profileData = {
        "name": firstName + ' ' + "davis",
        "occupation": "Dev" + " at " + "State Farm",
        "pictureUri": pictureUri
      }

      profile.profileHeadline = {
        network: 'twitter',
        info: "Leading the edge on Product Development",
        img: null
      }

      profile.feed = [{
          network: 'facebook',
          info: "Job: Software Developer at State Farm since 2012",
          img: null
        }, {
          network: 'facebook',
          info: "Relationship Status: In A relationship with Catherine Unkles",
          img: null
        }, {
          network: 'facebook',
          info: "Location: Atlanta, Georgia",
          img: null
        }]

        return profile;
    })
    .catch(e => {
      console.log("catch error occured:", e)
    });

  },
  getFacebookFeed(){
      return fetch('https://salesintel.herokuapp.com/api/v1/linkedin/maincall')
      .then(response => response.json())
      .then(data => {
          var fbFeed = {};
          fbFeed.feed = [];

          fbFeed.feed.push({
            info: "Favorite Teams: " + "Atlanta Falcons, UGA",
            img: null
          });
          fbFeed.feed.push({
            info: "Political beliefs: " + "Not republicans",
            img: null
          });
          fbFeed.feed.push({
            info: "Gender: " + "Male",
            img: null
          });
          fbFeed.feed.push({
            info: "Birthday: " + "6/18/1989 " + "age: "+ "27",
            img: null
          });
          fbFeed.feed.push({
            info: "Interested In: " + "Movies, Cars, Baby, Books, Startups, Tech",
            img: null
          });

          return fbFeed;
      })
      .catch(e => {
        console.log("FACEBOOK WY", e);
      })
  },
  getLinkedInFeed(){
    return fetch('https://salesintel.herokuapp.com/api/v1/linkedin/maincall')
    .then(response => response.json())
    .then(data => {
        var linkedinFeed = {};
        linkedinFeed.feed = [];

        linkedinFeed.feed.push({
          info: "Headline: Pushing the edge on product development!",
          img: null
        });

        linkedinFeed.feed.push({
          info: "Current Job: Software Developer for State Farm",
          img: null
        });

        linkedinFeed.feed.push({
          info: "Current Job: COO/CTO for NTerNow",
          img: null
        });

        linkedinFeed.feed.push({
          info: "Summary: A young tech entrepreneur trying to change the real estate from the bottom-up. A hardware driven platform that will forever change how the real estate industry does business. www.NterNow.com",
          img: null
        });

        linkedinFeed.feed.push({
          info: "Industry: Information Technology and Services",
          img: null
        });

        return linkedinFeed;
    })
    .catch(e => e);
  },
  getInstagramFeed(){
    return fetch('https://salesintel.herokuapp.com/api/v1/instagram/maincall')
    .then(response => response.json())
    .then(response => {
        var instagramFeed = {};
        instagramFeed.feed = [];

        for(var i=0; i < 3; i++){
          instagramFeed.feed.push({
            info: response.data[i].caption != null ? response.data[i].caption.text : null,
            img: response.data[i].images.standard_resolution.url
          });
        }

        return instagramFeed;
    })
    .catch(e => {
      console.log("INSTA ERROR",e);
    })
  },
  getTwitterFeed(){
    return fetch('https://salesintel.herokuapp.com/api/v1/twitter/searchTwitterTweetsById')
    .then(response => response.json())
    .then(data => {
        var twitterFeed = {};
        twitterFeed.feed = [];

        twitterFeed.feed.push({
          info: "SF Flash Build presentation later today. Wish me luck!",
          img: null
        });

        twitterFeed.feed.push({
          info: "Been working too hard this week; getting exhausted. #noSleep",
          img: null
        });

        twitterFeed.feed.push({
          info: "Shout out to my boy @adamBall for graduating from Georgia Tech today!",
          img: null
        });

        // for(var i=0; i < data.statuses.length; i++){
        //   twitterFeed.feed.push({
        //     info: data.statuses[i].text,
        //     img: null
        //   });
        // }

        return twitterFeed;
    })
    .catch(e => {
      console.log(e);
    })
  }
};

export {
  Api as
  default
};
