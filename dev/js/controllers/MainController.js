app.controller('MainController', ['$scope', function($scope) {
	console.log('hi');
	$scope.header = 'Music Player'; 
	$scope.topTracks = {
  "href" : "https://api.spotify.com/v1/users/spotify/playlists/5FJXhjdILmRA2z5bvz4nzf/tracks?offset=0&limit=100",
  "items" : [ {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0iGMQyIMXpYm0N5IcRVq4Z"
        },
        "href" : "https://api.spotify.com/v1/albums/0iGMQyIMXpYm0N5IcRVq4Z",
        "id" : "0iGMQyIMXpYm0N5IcRVq4Z",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c9de0170a5ba0e18074fbcb8338381dc11e9ab2d",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/7525026af26d2ef0bf6eb93cac5c1f119fcb0caa",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/1c5672ec5553e9c1ac55264b60103c13a7ef0a9a",
          "width" : 64
        } ],
        "name" : "Locked Away",
        "type" : "album",
        "uri" : "spotify:album:0iGMQyIMXpYm0N5IcRVq4Z"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4TH4BHy0LdBi3dpBW4P2UX"
        },
        "href" : "https://api.spotify.com/v1/artists/4TH4BHy0LdBi3dpBW4P2UX",
        "id" : "4TH4BHy0LdBi3dpBW4P2UX",
        "name" : "R. City",
        "type" : "artist",
        "uri" : "spotify:artist:4TH4BHy0LdBi3dpBW4P2UX"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4bYPcJP5jwMhSivRcqie2n"
        },
        "href" : "https://api.spotify.com/v1/artists/4bYPcJP5jwMhSivRcqie2n",
        "id" : "4bYPcJP5jwMhSivRcqie2n",
        "name" : "Adam Levine",
        "type" : "artist",
        "uri" : "spotify:artist:4bYPcJP5jwMhSivRcqie2n"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 227280,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USRC11501369"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0sQLhT32E9ZG2zn5iYR6nN"
      },
      "href" : "https://api.spotify.com/v1/tracks/0sQLhT32E9ZG2zn5iYR6nN",
      "id" : "0sQLhT32E9ZG2zn5iYR6nN",
      "name" : "Locked Away",
      "popularity" : 90,
      "preview_url" : "https://p.scdn.co/mp3-preview/4b3e741c9b46e346beab3c27979ffacf0042c4f9",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:0sQLhT32E9ZG2zn5iYR6nN"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IS", "IT", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5lkNnHVlnCCCV304t89wOH"
        },
        "href" : "https://api.spotify.com/v1/albums/5lkNnHVlnCCCV304t89wOH",
        "id" : "5lkNnHVlnCCCV304t89wOH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/f995c909bc1c567c434091bca8302ec6ea6d084a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/438e3b57abfa398f55a267911e91b049aed0b6e2",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/bd9d9e130647a75f9de13f67fbd40a3845791786",
          "width" : 64
        } ],
        "name" : "MY HOUSE",
        "type" : "album",
        "uri" : "spotify:album:5lkNnHVlnCCCV304t89wOH"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0jnsk9HBra6NMjO2oANoPY"
        },
        "href" : "https://api.spotify.com/v1/artists/0jnsk9HBra6NMjO2oANoPY",
        "id" : "0jnsk9HBra6NMjO2oANoPY",
        "name" : "Flo Rida",
        "type" : "artist",
        "uri" : "spotify:artist:0jnsk9HBra6NMjO2oANoPY"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0ZrpamOxcZybMHGg1AYtHP"
        },
        "href" : "https://api.spotify.com/v1/artists/0ZrpamOxcZybMHGg1AYtHP",
        "id" : "0ZrpamOxcZybMHGg1AYtHP",
        "name" : "Robin Thicke",
        "type" : "artist",
        "uri" : "spotify:artist:0ZrpamOxcZybMHGg1AYtHP"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4tMJliVd96wXoMVNdcOBHp"
        },
        "href" : "https://api.spotify.com/v1/artists/4tMJliVd96wXoMVNdcOBHp",
        "id" : "4tMJliVd96wXoMVNdcOBHp",
        "name" : "Verdine White",
        "type" : "artist",
        "uri" : "spotify:artist:4tMJliVd96wXoMVNdcOBHp"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IS", "IT", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 224258,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USAT21500395"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2S5LNtRVRPbXk01yRQ14sZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/2S5LNtRVRPbXk01yRQ14sZ",
      "id" : "2S5LNtRVRPbXk01yRQ14sZ",
      "name" : "I Don't Like It, I Love It (feat. Robin Thicke & Verdine White)",
      "popularity" : 96,
      "preview_url" : "https://p.scdn.co/mp3-preview/368b7a257d5e36065d2668403623b24197aac3da",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:2S5LNtRVRPbXk01yRQ14sZ"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6lYwnAawTuMeJS0fC64WyQ"
        },
        "href" : "https://api.spotify.com/v1/albums/6lYwnAawTuMeJS0fC64WyQ",
        "id" : "6lYwnAawTuMeJS0fC64WyQ",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ce5b4965bbb78c27e756657e5649ff2f8cd4107b",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/0419f925fb6e4afe9f09686006554e28430a0bcb",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/b51d8915bd4feafd1c929640fa5316a04916cf29",
          "width" : 64
        } ],
        "name" : "Can’t Feel My Face",
        "type" : "album",
        "uri" : "spotify:album:6lYwnAawTuMeJS0fC64WyQ"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
        },
        "href" : "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
        "id" : "1Xyo4u8uXC1ZmMpatF05PJ",
        "name" : "The Weeknd",
        "type" : "artist",
        "uri" : "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 215612,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUG11500741"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3X38ErFiKgzUxinBlhwuWm"
      },
      "href" : "https://api.spotify.com/v1/tracks/3X38ErFiKgzUxinBlhwuWm",
      "id" : "3X38ErFiKgzUxinBlhwuWm",
      "name" : "Can't Feel My Face",
      "popularity" : 97,
      "preview_url" : "https://p.scdn.co/mp3-preview/b02b44dd5c365a6c359c1324a70443b0db2107c1",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:3X38ErFiKgzUxinBlhwuWm"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/19YQ10twgD5djBaBDUpH7o"
        },
        "href" : "https://api.spotify.com/v1/albums/19YQ10twgD5djBaBDUpH7o",
        "id" : "19YQ10twgD5djBaBDUpH7o",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/0cf194beeb8118bcb0d492e1fdd010798dbc3a20",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/aa533378f184bcb1e60d5f52aa88e44ba67be0e1",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/27c80c44fade7e8b0dc2ed1fba5d8bccba01acdb",
          "width" : 64
        } ],
        "name" : "Hotline Bling",
        "type" : "album",
        "uri" : "spotify:album:19YQ10twgD5djBaBDUpH7o"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
        },
        "href" : "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
        "id" : "3TVXtAsR1Inumwj472S9r4",
        "name" : "Drake",
        "type" : "artist",
        "uri" : "spotify:artist:3TVXtAsR1Inumwj472S9r4"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 267023,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USCM51500238"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6nmz4imkDcmtwMjocAzFSx"
      },
      "href" : "https://api.spotify.com/v1/tracks/6nmz4imkDcmtwMjocAzFSx",
      "id" : "6nmz4imkDcmtwMjocAzFSx",
      "name" : "Hotline Bling",
      "popularity" : 87,
      "preview_url" : "https://p.scdn.co/mp3-preview/b4cbbd0c0779adaae79b14ddbecf763ad0417808",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6nmz4imkDcmtwMjocAzFSx"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7LnU0hAOYe9aq91PCKMI7A"
        },
        "href" : "https://api.spotify.com/v1/albums/7LnU0hAOYe9aq91PCKMI7A",
        "id" : "7LnU0hAOYe9aq91PCKMI7A",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/bd6dffbcab8963ee5a2b15b58f861918caaa6d43",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/dd5fc5228adcd7049373e3c925259f6a4a5978b0",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/286f561d1e2e97f0de82dae9f09e51af8161d3b5",
          "width" : 64
        } ],
        "name" : "Drag Me Down",
        "type" : "album",
        "uri" : "spotify:album:7LnU0hAOYe9aq91PCKMI7A"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq"
        },
        "href" : "https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq",
        "id" : "4AK6F7OLvEQ5QYCBNiQWHq",
        "name" : "One Direction",
        "type" : "artist",
        "uri" : "spotify:artist:4AK6F7OLvEQ5QYCBNiQWHq"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 192106,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBHMU1500070"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/70OTIpw8x8UXUsuCHW9i1i"
      },
      "href" : "https://api.spotify.com/v1/tracks/70OTIpw8x8UXUsuCHW9i1i",
      "id" : "70OTIpw8x8UXUsuCHW9i1i",
      "name" : "Drag Me Down",
      "popularity" : 98,
      "preview_url" : "https://p.scdn.co/mp3-preview/3cea51ea1ec8dbbb2ed7da9a68cab97980f8b3a2",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:70OTIpw8x8UXUsuCHW9i1i"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2kUXqmlthYkv0yyW3N9cy8"
        },
        "href" : "https://api.spotify.com/v1/albums/2kUXqmlthYkv0yyW3N9cy8",
        "id" : "2kUXqmlthYkv0yyW3N9cy8",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/72d0fb955bd92e5fd2866a556d72a8e2f16fcec2",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/151a95335af82cf47211165b4f4908cfda27ee3c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ddcd0c357723f6441cbeae07181fa7dee0a7e63e",
          "width" : 64
        } ],
        "name" : "Kill The Lights",
        "type" : "album",
        "uri" : "spotify:album:2kUXqmlthYkv0yyW3N9cy8"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0BvkDsjIUla7X0k6CSWh1I"
        },
        "href" : "https://api.spotify.com/v1/artists/0BvkDsjIUla7X0k6CSWh1I",
        "id" : "0BvkDsjIUla7X0k6CSWh1I",
        "name" : "Luke Bryan",
        "type" : "artist",
        "uri" : "spotify:artist:0BvkDsjIUla7X0k6CSWh1I"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 190600,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71506991"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7wVeIwUxcUddK44joZ3bPO"
      },
      "href" : "https://api.spotify.com/v1/tracks/7wVeIwUxcUddK44joZ3bPO",
      "id" : "7wVeIwUxcUddK44joZ3bPO",
      "name" : "Kick The Dust Up",
      "popularity" : 78,
      "preview_url" : "https://p.scdn.co/mp3-preview/7bdc420f8362c7eaa15ab92734ed1188abac1746",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:7wVeIwUxcUddK44joZ3bPO"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3cG32DOXJoYlOHMmJIaQsm"
        },
        "href" : "https://api.spotify.com/v1/albums/3cG32DOXJoYlOHMmJIaQsm",
        "id" : "3cG32DOXJoYlOHMmJIaQsm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/7d803d8421d8ac9138255419a04a71323b31c9e3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3186ff2fd55bf05a34111504109fa24e9c805fff",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/edba7af9006154319d7b98d7d483e2943a73ed0a",
          "width" : 64
        } ],
        "name" : "How Deep Is Your Love",
        "type" : "album",
        "uri" : "spotify:album:3cG32DOXJoYlOHMmJIaQsm"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
        },
        "href" : "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
        "id" : "7CajNmpbOovFoOoasH2HaY",
        "name" : "Calvin Harris",
        "type" : "artist",
        "uri" : "spotify:artist:7CajNmpbOovFoOoasH2HaY"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5EehXjjMktLuJmbRsM7YfB"
        },
        "href" : "https://api.spotify.com/v1/artists/5EehXjjMktLuJmbRsM7YfB",
        "id" : "5EehXjjMktLuJmbRsM7YfB",
        "name" : "Disciples",
        "type" : "artist",
        "uri" : "spotify:artist:5EehXjjMktLuJmbRsM7YfB"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 212640,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBARL1500704"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/22mek4IiqubGD9ctzxc69s"
      },
      "href" : "https://api.spotify.com/v1/tracks/22mek4IiqubGD9ctzxc69s",
      "id" : "22mek4IiqubGD9ctzxc69s",
      "name" : "How Deep Is Your Love",
      "popularity" : 98,
      "preview_url" : "https://p.scdn.co/mp3-preview/2beeadd17ed8642a6770f02e575aa6dfed81a3aa",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:22mek4IiqubGD9ctzxc69s"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/23XWXQAZVXGyRRpEmYOyQF"
        },
        "href" : "https://api.spotify.com/v1/albums/23XWXQAZVXGyRRpEmYOyQF",
        "id" : "23XWXQAZVXGyRRpEmYOyQF",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/25ba77d6ef3b2d2199fcabcaf06a27f4630e3277",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/f24f476e2cee22118929a99c320a3b2e82e012b3",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/c541f86ae7778e9e2c30519d086c6199f450de32",
          "width" : 64
        } ],
        "name" : "Sugar (feat. Francesco Yates)",
        "type" : "album",
        "uri" : "spotify:album:23XWXQAZVXGyRRpEmYOyQF"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3t5xRXzsuZmMDkQzgOX35S"
        },
        "href" : "https://api.spotify.com/v1/artists/3t5xRXzsuZmMDkQzgOX35S",
        "id" : "3t5xRXzsuZmMDkQzgOX35S",
        "name" : "Robin Schulz",
        "type" : "artist",
        "uri" : "spotify:artist:3t5xRXzsuZmMDkQzgOX35S"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5X1JzPIIonP3u9lA580pPT"
        },
        "href" : "https://api.spotify.com/v1/artists/5X1JzPIIonP3u9lA580pPT",
        "id" : "5X1JzPIIonP3u9lA580pPT",
        "name" : "Francesco Yates",
        "type" : "artist",
        "uri" : "spotify:artist:5X1JzPIIonP3u9lA580pPT"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 219043,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "DEA621501057"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3NFuE3uDOr6QUw9UZ9HzKo"
      },
      "href" : "https://api.spotify.com/v1/tracks/3NFuE3uDOr6QUw9UZ9HzKo",
      "id" : "3NFuE3uDOr6QUw9UZ9HzKo",
      "name" : "Sugar (feat. Francesco Yates)",
      "popularity" : 93,
      "preview_url" : "https://p.scdn.co/mp3-preview/5986f088616b069959b9bcde83ffa97ed6a76e0f",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:3NFuE3uDOr6QUw9UZ9HzKo"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7HuuDdhR4ukUjkQg9ty6kt"
        },
        "href" : "https://api.spotify.com/v1/albums/7HuuDdhR4ukUjkQg9ty6kt",
        "id" : "7HuuDdhR4ukUjkQg9ty6kt",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/cceb79649b9d39076e809f36a42614c468ea4f2b",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/9b7fd0cdd78ae43ca0a6bb457812c18c0caf1ef6",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/3f2f7a6408ebe74cedd4a41a411e9c0730748296",
          "width" : 64
        } ],
        "name" : "Cool for the Summer",
        "type" : "album",
        "uri" : "spotify:album:7HuuDdhR4ukUjkQg9ty6kt"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6S2OmqARrzebs0tKUEyXyp"
        },
        "href" : "https://api.spotify.com/v1/artists/6S2OmqARrzebs0tKUEyXyp",
        "id" : "6S2OmqARrzebs0tKUEyXyp",
        "name" : "Demi Lovato",
        "type" : "artist",
        "uri" : "spotify:artist:6S2OmqARrzebs0tKUEyXyp"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 214746,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USHR11536621"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1KK0j3djUgx5tuOMwesdAT"
      },
      "href" : "https://api.spotify.com/v1/tracks/1KK0j3djUgx5tuOMwesdAT",
      "id" : "1KK0j3djUgx5tuOMwesdAT",
      "name" : "Cool for the Summer",
      "popularity" : 90,
      "preview_url" : "https://p.scdn.co/mp3-preview/704b62e6c14b62e975774134fe674203e4061785",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:1KK0j3djUgx5tuOMwesdAT"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7o2isj1xuTf4gzQJ7gDUzI"
        },
        "href" : "https://api.spotify.com/v1/albums/7o2isj1xuTf4gzQJ7gDUzI",
        "id" : "7o2isj1xuTf4gzQJ7gDUzI",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/712f041219b6a2d8006d74414231bf9a1b95b470",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/7d254847aacc646fc9facbb35b6adbcd9611a461",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/183df046a948f055f51648b8d0438891fb41c743",
          "width" : 64
        } ],
        "name" : "Good For You",
        "type" : "album",
        "uri" : "spotify:album:7o2isj1xuTf4gzQJ7gDUzI"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
        },
        "href" : "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
        "id" : "0C8ZW7ezQVs4URX5aX7Kqx",
        "name" : "Selena Gomez",
        "type" : "artist",
        "uri" : "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca"
        },
        "href" : "https://api.spotify.com/v1/artists/13ubrt8QOOCPljQ2FL1Kca",
        "id" : "13ubrt8QOOCPljQ2FL1Kca",
        "name" : "A$AP Rocky",
        "type" : "artist",
        "uri" : "spotify:artist:13ubrt8QOOCPljQ2FL1Kca"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 220679,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71508741"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0kGXCXZkTMxJU7GXkJdzH0"
      },
      "href" : "https://api.spotify.com/v1/tracks/0kGXCXZkTMxJU7GXkJdzH0",
      "id" : "0kGXCXZkTMxJU7GXkJdzH0",
      "name" : "Good For You",
      "popularity" : 92,
      "preview_url" : "https://p.scdn.co/mp3-preview/d91c57408eb1bb0c1ef939196b0d34124aff9cba",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:0kGXCXZkTMxJU7GXkJdzH0"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0V7c0hnrLUFJyHNtjiAT2E"
        },
        "href" : "https://api.spotify.com/v1/albums/0V7c0hnrLUFJyHNtjiAT2E",
        "id" : "0V7c0hnrLUFJyHNtjiAT2E",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/fab9896046e7ea7d3fd33d67e4662d14c3657549",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/c7e1d3fefa17c3ba5d029e8c684aa31e6ef1107a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/79dc07d678ccffca2b2a233d8fc628d2b3ea5427",
          "width" : 64
        } ],
        "name" : "Montevallo",
        "type" : "album",
        "uri" : "spotify:album:0V7c0hnrLUFJyHNtjiAT2E"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2kucQ9jQwuD8jWdtR9Ef38"
        },
        "href" : "https://api.spotify.com/v1/artists/2kucQ9jQwuD8jWdtR9Ef38",
        "id" : "2kucQ9jQwuD8jWdtR9Ef38",
        "name" : "Sam Hunt",
        "type" : "artist",
        "uri" : "spotify:artist:2kucQ9jQwuD8jWdtR9Ef38"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 190240,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71411592"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1TwLKNsCnhi1HxbIi4bAW0"
      },
      "href" : "https://api.spotify.com/v1/tracks/1TwLKNsCnhi1HxbIi4bAW0",
      "id" : "1TwLKNsCnhi1HxbIi4bAW0",
      "name" : "House Party",
      "popularity" : 84,
      "preview_url" : "https://p.scdn.co/mp3-preview/c430694f561154430a20c553c60b02782df489ec",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:1TwLKNsCnhi1HxbIi4bAW0"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/05MKaTFdEtg64AtPmN1nQ7"
        },
        "href" : "https://api.spotify.com/v1/albums/05MKaTFdEtg64AtPmN1nQ7",
        "id" : "05MKaTFdEtg64AtPmN1nQ7",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e1727c8a41f74942e1fc8ebd9f92469054a266a0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/267afbe410515b8077eba14e760a279eaecf0a01",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/d31ef058e330050abe8fa037a58703957b1e4803",
          "width" : 64
        } ],
        "name" : "Black Magic",
        "type" : "album",
        "uri" : "spotify:album:05MKaTFdEtg64AtPmN1nQ7"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3e7awlrlDSwF3iM0WBjGMp"
        },
        "href" : "https://api.spotify.com/v1/artists/3e7awlrlDSwF3iM0WBjGMp",
        "id" : "3e7awlrlDSwF3iM0WBjGMp",
        "name" : "Little Mix",
        "type" : "artist",
        "uri" : "spotify:artist:3e7awlrlDSwF3iM0WBjGMp"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 211786,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBHMU1500046"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/33NHr7lu7tCMjK05jUj1v0"
      },
      "href" : "https://api.spotify.com/v1/tracks/33NHr7lu7tCMjK05jUj1v0",
      "id" : "33NHr7lu7tCMjK05jUj1v0",
      "name" : "Black Magic",
      "popularity" : 92,
      "preview_url" : "https://p.scdn.co/mp3-preview/27aeeacd017f2fd6d36d641a9c559e37f9af8bdc",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:33NHr7lu7tCMjK05jUj1v0"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3WlhtdAbDsDxFJ4k7CLuFM"
        },
        "href" : "https://api.spotify.com/v1/albums/3WlhtdAbDsDxFJ4k7CLuFM",
        "id" : "3WlhtdAbDsDxFJ4k7CLuFM",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/594bc528827690e66c07d12360d4fd1afe8ca622",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/22d708ee57d710bd22f3ec1689db5d1c27c3559e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/c14914fb2c46d5ecb2b6dcf6f87d25c8ee7242b9",
          "width" : 64
        } ],
        "name" : "Run Away With Me",
        "type" : "album",
        "uri" : "spotify:album:3WlhtdAbDsDxFJ4k7CLuFM"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
        },
        "href" : "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
        "id" : "6sFIWsNpZYqfjUpaCgueju",
        "name" : "Carly Rae Jepsen",
        "type" : "artist",
        "uri" : "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
      } ],
      "available_markets" : [ "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 251319,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71507009"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/109zTcJZq088RiXANFRC7j"
      },
      "href" : "https://api.spotify.com/v1/tracks/109zTcJZq088RiXANFRC7j",
      "id" : "109zTcJZq088RiXANFRC7j",
      "name" : "Run Away With Me",
      "popularity" : 77,
      "preview_url" : "https://p.scdn.co/mp3-preview/c91c9a299bee41ca2f964784fe5463715677ba19",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:109zTcJZq088RiXANFRC7j"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1xn54DMo2qIqBuMqHtUsFd"
        },
        "href" : "https://api.spotify.com/v1/albums/1xn54DMo2qIqBuMqHtUsFd",
        "id" : "1xn54DMo2qIqBuMqHtUsFd",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/646e9619750dfa3d1eadbbea959dc6f528a9109e",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/c6574e297a501e44d051f9130c883e1fdfcb3099",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/dd88378ab44f521fa2fdeb011039812e2e66367e",
          "width" : 64
        } ],
        "name" : "x (Deluxe Edition)",
        "type" : "album",
        "uri" : "spotify:album:1xn54DMo2qIqBuMqHtUsFd"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
        },
        "href" : "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
        "id" : "6eUKZXaKkcviH0Ku9w2n3V",
        "name" : "Ed Sheeran",
        "type" : "artist",
        "uri" : "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 258986,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBAHS1400094"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL"
      },
      "href" : "https://api.spotify.com/v1/tracks/1HNkqx9Ahdgi1Ixy2xkKkL",
      "id" : "1HNkqx9Ahdgi1Ixy2xkKkL",
      "name" : "Photograph",
      "popularity" : 97,
      "preview_url" : "https://p.scdn.co/mp3-preview/323627f4a6a5da9705eae7bd6197ad662a5a502f",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:1HNkqx9Ahdgi1Ixy2xkKkL"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0TyDTzG2zt2tg0wONT9wSU"
        },
        "href" : "https://api.spotify.com/v1/albums/0TyDTzG2zt2tg0wONT9wSU",
        "id" : "0TyDTzG2zt2tg0wONT9wSU",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/253f2041305189e6ba285ae3f2794256763677af",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/7c0b1feae88f8523e3ca4adf95114086c5d4c310",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/23386bc6354d44999c26c84bae95fad00133d46a",
          "width" : 64
        } ],
        "name" : "679 (feat. Remy Boyz)",
        "type" : "album",
        "uri" : "spotify:album:0TyDTzG2zt2tg0wONT9wSU"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6PXS4YHDkKvl1wkIl4V8DL"
        },
        "href" : "https://api.spotify.com/v1/artists/6PXS4YHDkKvl1wkIl4V8DL",
        "id" : "6PXS4YHDkKvl1wkIl4V8DL",
        "name" : "Fetty Wap",
        "type" : "artist",
        "uri" : "spotify:artist:6PXS4YHDkKvl1wkIl4V8DL"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2s0yxtiHiyGe6CY4mbDYFi"
        },
        "href" : "https://api.spotify.com/v1/artists/2s0yxtiHiyGe6CY4mbDYFi",
        "id" : "2s0yxtiHiyGe6CY4mbDYFi",
        "name" : "Remy Boyz",
        "type" : "artist",
        "uri" : "spotify:artist:2s0yxtiHiyGe6CY4mbDYFi"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 196693,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "QMCE31500250"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5NQbUaeTEOGdD6hHcre0dZ"
      },
      "href" : "https://api.spotify.com/v1/tracks/5NQbUaeTEOGdD6hHcre0dZ",
      "id" : "5NQbUaeTEOGdD6hHcre0dZ",
      "name" : "679 (feat. Remy Boyz)",
      "popularity" : 95,
      "preview_url" : "https://p.scdn.co/mp3-preview/92889de6d80ff86e5780fb0c413d10ffde0619a6",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:5NQbUaeTEOGdD6hHcre0dZ"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/02tTjKlh9iQ5jlWYPbKLJZ"
        },
        "href" : "https://api.spotify.com/v1/albums/02tTjKlh9iQ5jlWYPbKLJZ",
        "id" : "02tTjKlh9iQ5jlWYPbKLJZ",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/68a6ae5e914b73650396597a61eaa7a24dbefe9b",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/520cb06d752e4034a6a37bb35e553064f3f15b76",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/642144d958f6c755eb32c2f19a3b07a8295ffeb4",
          "width" : 64
        } ],
        "name" : "Furious 7: Original Motion Picture Soundtrack",
        "type" : "album",
        "uri" : "spotify:album:02tTjKlh9iQ5jlWYPbKLJZ"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/137W8MRPWKqSmrBGDBFSop"
        },
        "href" : "https://api.spotify.com/v1/artists/137W8MRPWKqSmrBGDBFSop",
        "id" : "137W8MRPWKqSmrBGDBFSop",
        "name" : "Wiz Khalifa",
        "type" : "artist",
        "uri" : "spotify:artist:137W8MRPWKqSmrBGDBFSop"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7"
        },
        "href" : "https://api.spotify.com/v1/artists/6VuMaDnrHyPL1p4EHjYLi7",
        "id" : "6VuMaDnrHyPL1p4EHjYLi7",
        "name" : "Charlie Puth",
        "type" : "artist",
        "uri" : "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 229525,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USAT21500313"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7wqSzGeodspE3V6RBD5W8L"
      },
      "href" : "https://api.spotify.com/v1/tracks/7wqSzGeodspE3V6RBD5W8L",
      "id" : "7wqSzGeodspE3V6RBD5W8L",
      "name" : "See You Again (feat. Charlie Puth)",
      "popularity" : 99,
      "preview_url" : "https://p.scdn.co/mp3-preview/179b423d39afb00cd13af0490289b15f760d7a85",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:7wqSzGeodspE3V6RBD5W8L"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6bfkwBrGYKJFk6Z4QVyjxd"
        },
        "href" : "https://api.spotify.com/v1/albums/6bfkwBrGYKJFk6Z4QVyjxd",
        "id" : "6bfkwBrGYKJFk6Z4QVyjxd",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/292c18a8d58184c6943033e10aa1deb98efc07de",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/7cba10274638d0d3834ef3afb0722b5d9011d4f1",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/2aad9c6ce42cdbc5860c01e262a4cf65bdc9649e",
          "width" : 64
        } ],
        "name" : "Skrillex and Diplo present Jack Ü",
        "type" : "album",
        "uri" : "spotify:album:6bfkwBrGYKJFk6Z4QVyjxd"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1HxJeLhIuegM3KgvPn8sTa"
        },
        "href" : "https://api.spotify.com/v1/artists/1HxJeLhIuegM3KgvPn8sTa",
        "id" : "1HxJeLhIuegM3KgvPn8sTa",
        "name" : "Jack Ü",
        "type" : "artist",
        "uri" : "spotify:artist:1HxJeLhIuegM3KgvPn8sTa"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5he5w2lnU9x7JFhnwcekXX"
        },
        "href" : "https://api.spotify.com/v1/artists/5he5w2lnU9x7JFhnwcekXX",
        "id" : "5he5w2lnU9x7JFhnwcekXX",
        "name" : "Skrillex",
        "type" : "artist",
        "uri" : "spotify:artist:5he5w2lnU9x7JFhnwcekXX"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5fMUXHkw8R8eOP2RNVYEZX"
        },
        "href" : "https://api.spotify.com/v1/artists/5fMUXHkw8R8eOP2RNVYEZX",
        "id" : "5fMUXHkw8R8eOP2RNVYEZX",
        "name" : "Diplo",
        "type" : "artist",
        "uri" : "spotify:artist:5fMUXHkw8R8eOP2RNVYEZX"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
        },
        "href" : "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
        "id" : "1uNFoZAHBGtllmzznpCI3s",
        "name" : "Justin Bieber",
        "type" : "artist",
        "uri" : "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 250285,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USAT21500555"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/66hayvUbTotekKU3H4ta1f"
      },
      "href" : "https://api.spotify.com/v1/tracks/66hayvUbTotekKU3H4ta1f",
      "id" : "66hayvUbTotekKU3H4ta1f",
      "name" : "Where Are Ü Now (with Justin Bieber)",
      "popularity" : 100,
      "preview_url" : "https://p.scdn.co/mp3-preview/374e5d28ca9edde1613208d148a2e3f60fb86dc4",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:66hayvUbTotekKU3H4ta1f"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4uuU5tom8sut1CkGq4JYvR"
        },
        "href" : "https://api.spotify.com/v1/albums/4uuU5tom8sut1CkGq4JYvR",
        "id" : "4uuU5tom8sut1CkGq4JYvR",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/f6bab94b437a80406b01bf7e2a6176755160c9ba",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/fd71bf45aa9bb07fbc80888154f858336db4bb94",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/19e8412e75262713ec5732a66591bca0c57cda84",
          "width" : 64
        } ],
        "name" : "So F**kin' Romantic",
        "type" : "album",
        "uri" : "spotify:album:4uuU5tom8sut1CkGq4JYvR"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1mU61l2mcjEFraXZLpvVMo"
        },
        "href" : "https://api.spotify.com/v1/artists/1mU61l2mcjEFraXZLpvVMo",
        "id" : "1mU61l2mcjEFraXZLpvVMo",
        "name" : "Matthew Koma",
        "type" : "artist",
        "uri" : "spotify:artist:1mU61l2mcjEFraXZLpvVMo"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 229735,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USRC11501792"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/05t0KI6zFHDSRT9gdLCAyW"
      },
      "href" : "https://api.spotify.com/v1/tracks/05t0KI6zFHDSRT9gdLCAyW",
      "id" : "05t0KI6zFHDSRT9gdLCAyW",
      "name" : "So F**kin' Romantic",
      "popularity" : 78,
      "preview_url" : "https://p.scdn.co/mp3-preview/53675e690cf3777f67140d56e45f73b018ff5471",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:05t0KI6zFHDSRT9gdLCAyW"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/59eUYETmE1zi31ESb3SUkI"
        },
        "href" : "https://api.spotify.com/v1/albums/59eUYETmE1zi31ESb3SUkI",
        "id" : "59eUYETmE1zi31ESb3SUkI",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/d4e179cf14800ae015c18029aa7f6b35a3c1a29a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/6db4601516dd20b3bc19279bfdbcb168c2335c3c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/943ec26cc94b2a222d4d1fcba682aeba4b2310eb",
          "width" : 64
        } ],
        "name" : "Everything Is 4",
        "type" : "album",
        "uri" : "spotify:album:59eUYETmE1zi31ESb3SUkI"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/07YZf4WDAMNwqr4jfgOZ8y"
        },
        "href" : "https://api.spotify.com/v1/artists/07YZf4WDAMNwqr4jfgOZ8y",
        "id" : "07YZf4WDAMNwqr4jfgOZ8y",
        "name" : "Jason Derulo",
        "type" : "artist",
        "uri" : "spotify:artist:07YZf4WDAMNwqr4jfgOZ8y"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 215107,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USWB11504527"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3EofjRgUI1WrzqqtLb8NoF"
      },
      "href" : "https://api.spotify.com/v1/tracks/3EofjRgUI1WrzqqtLb8NoF",
      "id" : "3EofjRgUI1WrzqqtLb8NoF",
      "name" : "Cheyenne",
      "popularity" : 85,
      "preview_url" : "https://p.scdn.co/mp3-preview/a0dc2eb0380bc3d26082bbd4853e0179ced70acc",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:3EofjRgUI1WrzqqtLb8NoF"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5nYi5TJ16E7Qt73zxOu6sP"
        },
        "href" : "https://api.spotify.com/v1/albums/5nYi5TJ16E7Qt73zxOu6sP",
        "id" : "5nYi5TJ16E7Qt73zxOu6sP",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/09283c3f31c0647bc8cb7479a149d3f630b85020",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/2749882ae7e9dd6beaf26ad0e22d3ccf9de403f3",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/63038012add100d04656804cc9ebe1632c987349",
          "width" : 64
        } ],
        "name" : "Watch Me (Whip / Nae Nae)",
        "type" : "album",
        "uri" : "spotify:album:5nYi5TJ16E7Qt73zxOu6sP"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7juKTDFlPesGeWQ1GmjmOv"
        },
        "href" : "https://api.spotify.com/v1/artists/7juKTDFlPesGeWQ1GmjmOv",
        "id" : "7juKTDFlPesGeWQ1GmjmOv",
        "name" : "Silento",
        "type" : "artist",
        "uri" : "spotify:artist:7juKTDFlPesGeWQ1GmjmOv"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 185131,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71506622"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5RIVoVdkDLEygELLCniZFr"
      },
      "href" : "https://api.spotify.com/v1/tracks/5RIVoVdkDLEygELLCniZFr",
      "id" : "5RIVoVdkDLEygELLCniZFr",
      "name" : "Watch Me (Whip / Nae Nae)",
      "popularity" : 90,
      "preview_url" : "https://p.scdn.co/mp3-preview/5f5b7759c067fcd03906161ade6bbd513eb4d69c",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:5RIVoVdkDLEygELLCniZFr"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6eDx949ONWDCN0O22wFZf7"
        },
        "href" : "https://api.spotify.com/v1/albums/6eDx949ONWDCN0O22wFZf7",
        "id" : "6eDx949ONWDCN0O22wFZf7",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ddfe1eaf636fdc2961e7dbffde564e9d14679042",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/c2cc1553f8f800267e265e75a633d1996acec087",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/6ddc8a145883c31a5bcf74ea49dd6f85065efac8",
          "width" : 64
        } ],
        "name" : "SremmLife",
        "type" : "album",
        "uri" : "spotify:album:6eDx949ONWDCN0O22wFZf7"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7iZtZyCzp3LItcw1wtPI3D"
        },
        "href" : "https://api.spotify.com/v1/artists/7iZtZyCzp3LItcw1wtPI3D",
        "id" : "7iZtZyCzp3LItcw1wtPI3D",
        "name" : "Rae Sremmurd",
        "type" : "artist",
        "uri" : "spotify:artist:7iZtZyCzp3LItcw1wtPI3D"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 206306,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USUM71417486"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4jTiyLlOJVJj3mCr7yfPQD"
      },
      "href" : "https://api.spotify.com/v1/tracks/4jTiyLlOJVJj3mCr7yfPQD",
      "id" : "4jTiyLlOJVJj3mCr7yfPQD",
      "name" : "This Could Be Us",
      "popularity" : 87,
      "preview_url" : "https://p.scdn.co/mp3-preview/b9dcde77600da6acd80d9a0bf73141a1b5a9f2bf",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:4jTiyLlOJVJj3mCr7yfPQD"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/63L3vuRRfaEIsQXsVsQ8oQ"
        },
        "href" : "https://api.spotify.com/v1/albums/63L3vuRRfaEIsQXsVsQ8oQ",
        "id" : "63L3vuRRfaEIsQXsVsQ8oQ",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/4e1d108995a6947bfc6b1d728f0fcd5b4c5ec644",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/6fa19f4aa3a85366771aeb203a1bc8641db6584c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/9c9779b131e6648df0bc4a1bac408b50916d60a8",
          "width" : 64
        } ],
        "name" : "Fight Song - EP",
        "type" : "album",
        "uri" : "spotify:album:63L3vuRRfaEIsQXsVsQ8oQ"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3QLIkT4rD2FMusaqmkepbq"
        },
        "href" : "https://api.spotify.com/v1/artists/3QLIkT4rD2FMusaqmkepbq",
        "id" : "3QLIkT4rD2FMusaqmkepbq",
        "name" : "Rachel Platten",
        "type" : "artist",
        "uri" : "spotify:artist:3QLIkT4rD2FMusaqmkepbq"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 204066,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USSM11500753"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6bRbeEgg8v8BQ0HuVuPE7v"
      },
      "href" : "https://api.spotify.com/v1/tracks/6bRbeEgg8v8BQ0HuVuPE7v",
      "id" : "6bRbeEgg8v8BQ0HuVuPE7v",
      "name" : "Fight Song",
      "popularity" : 92,
      "preview_url" : "https://p.scdn.co/mp3-preview/d2e09def331c18d87d7312c29a2fcef70f3ac6ea",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6bRbeEgg8v8BQ0HuVuPE7v"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3mNoFlD1wsoXfkljfFzExT"
        },
        "href" : "https://api.spotify.com/v1/albums/3mNoFlD1wsoXfkljfFzExT",
        "id" : "3mNoFlD1wsoXfkljfFzExT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/1c87b0ac6f0cd837dc399d52bab96134442547ea",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/fae75f376d3e7e076ccd714785cb76129b82a15f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/e27340225ed8416e779e693bc642e7b460a767e4",
          "width" : 64
        } ],
        "name" : "TALKING IS HARD",
        "type" : "album",
        "uri" : "spotify:album:3mNoFlD1wsoXfkljfFzExT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6DIS6PRrLS3wbnZsf7vYic"
        },
        "href" : "https://api.spotify.com/v1/artists/6DIS6PRrLS3wbnZsf7vYic",
        "id" : "6DIS6PRrLS3wbnZsf7vYic",
        "name" : "WALK THE MOON",
        "type" : "artist",
        "uri" : "spotify:artist:6DIS6PRrLS3wbnZsf7vYic"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 199080,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USRC11401949"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4kbj5MwxO1bq9wjT5g9HaA"
      },
      "href" : "https://api.spotify.com/v1/tracks/4kbj5MwxO1bq9wjT5g9HaA",
      "id" : "4kbj5MwxO1bq9wjT5g9HaA",
      "name" : "Shut Up and Dance",
      "popularity" : 96,
      "preview_url" : "https://p.scdn.co/mp3-preview/5b2523b77af5510dbfa5c37f531f1851af91c897",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:4kbj5MwxO1bq9wjT5g9HaA"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IS", "IT", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5t4A7Loq1pKRFlkBOs1O2O"
        },
        "href" : "https://api.spotify.com/v1/albums/5t4A7Loq1pKRFlkBOs1O2O",
        "id" : "5t4A7Loq1pKRFlkBOs1O2O",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/bb30166581d02004a43a7632a20ecd1e06c10e0f",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/f210b2d4d61302c3cb742aa1111abfa829a04323",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/1dbf9cac2d8ec13a588f8cb4b93dc028935a4ecc",
          "width" : 64
        } ],
        "name" : "Some Type Of Love",
        "type" : "album",
        "uri" : "spotify:album:5t4A7Loq1pKRFlkBOs1O2O"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7"
        },
        "href" : "https://api.spotify.com/v1/artists/6VuMaDnrHyPL1p4EHjYLi7",
        "id" : "6VuMaDnrHyPL1p4EHjYLi7",
        "name" : "Charlie Puth",
        "type" : "artist",
        "uri" : "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6JL8zeS1NmiOftqZTRgdTz"
        },
        "href" : "https://api.spotify.com/v1/artists/6JL8zeS1NmiOftqZTRgdTz",
        "id" : "6JL8zeS1NmiOftqZTRgdTz",
        "name" : "Meghan Trainor",
        "type" : "artist",
        "uri" : "spotify:artist:6JL8zeS1NmiOftqZTRgdTz"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "IS", "IT", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 187741,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USAT21500254"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6ukMqDxnOPOgoHdak7Kyp3"
      },
      "href" : "https://api.spotify.com/v1/tracks/6ukMqDxnOPOgoHdak7Kyp3",
      "id" : "6ukMqDxnOPOgoHdak7Kyp3",
      "name" : "Marvin Gaye (feat. Meghan Trainor)",
      "popularity" : 91,
      "preview_url" : "https://p.scdn.co/mp3-preview/f9ff798a1befdfd54468fe463c3cbccdc27e636b",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:6ukMqDxnOPOgoHdak7Kyp3"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2O3OKOYCub892PUGprsaQo"
        },
        "href" : "https://api.spotify.com/v1/albums/2O3OKOYCub892PUGprsaQo",
        "id" : "2O3OKOYCub892PUGprsaQo",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/bf60b560bc5dd85ed7412508bdb75f6f27731c73",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/cb53ed2859a3966d597094cd82735aaed675061e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/7d7bdd80ea505d7b11a6c97421d9308375193499",
          "width" : 64
        } ],
        "name" : "Dreams Worth More Than Money",
        "type" : "album",
        "uri" : "spotify:album:2O3OKOYCub892PUGprsaQo"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/20sxb77xiYeusSH8cVdatc"
        },
        "href" : "https://api.spotify.com/v1/artists/20sxb77xiYeusSH8cVdatc",
        "id" : "20sxb77xiYeusSH8cVdatc",
        "name" : "Meek Mill",
        "type" : "artist",
        "uri" : "spotify:artist:20sxb77xiYeusSH8cVdatc"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh"
        },
        "href" : "https://api.spotify.com/v1/artists/0hCNtLu0JehylgoiP8L4Gh",
        "id" : "0hCNtLu0JehylgoiP8L4Gh",
        "name" : "Nicki Minaj",
        "type" : "artist",
        "uri" : "spotify:artist:0hCNtLu0JehylgoiP8L4Gh"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 223973,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USAT21501575"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0hy1SOTEn9ifXTzOwnCwEr"
      },
      "href" : "https://api.spotify.com/v1/tracks/0hy1SOTEn9ifXTzOwnCwEr",
      "id" : "0hy1SOTEn9ifXTzOwnCwEr",
      "name" : "All Eyes On You (feat. Chris Brown & Nicki Minaj)",
      "popularity" : 93,
      "preview_url" : "https://p.scdn.co/mp3-preview/8ad72d6b90a37155eae2087249e9cf4be353cce5",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:0hy1SOTEn9ifXTzOwnCwEr"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0zAsh6hObeNmFgFPrUiFcP"
        },
        "href" : "https://api.spotify.com/v1/albums/0zAsh6hObeNmFgFPrUiFcP",
        "id" : "0zAsh6hObeNmFgFPrUiFcP",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c3c226ca1b710078b9f2d9b01c9fdd0c7823c80d",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/2910f0b081430686f99287edc1a089fd0e1f93ba",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/e4248cbafeed7c5026a5939cffc8c6ad8c41732b",
          "width" : 64
        } ],
        "name" : "Reflection (Deluxe)",
        "type" : "album",
        "uri" : "spotify:album:0zAsh6hObeNmFgFPrUiFcP"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1l8Fu6IkuTP0U5QetQJ5Xt"
        },
        "href" : "https://api.spotify.com/v1/artists/1l8Fu6IkuTP0U5QetQJ5Xt",
        "id" : "1l8Fu6IkuTP0U5QetQJ5Xt",
        "name" : "Fifth Harmony",
        "type" : "artist",
        "uri" : "spotify:artist:1l8Fu6IkuTP0U5QetQJ5Xt"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6KZDXtSj0SzGOV705nNeh3"
        },
        "href" : "https://api.spotify.com/v1/artists/6KZDXtSj0SzGOV705nNeh3",
        "id" : "6KZDXtSj0SzGOV705nNeh3",
        "name" : "Kid Ink",
        "type" : "artist",
        "uri" : "spotify:artist:6KZDXtSj0SzGOV705nNeh3"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 224573,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USSM11406644"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/41Fflg7qHiVOD6dEPvsCzO"
      },
      "href" : "https://api.spotify.com/v1/tracks/41Fflg7qHiVOD6dEPvsCzO",
      "id" : "41Fflg7qHiVOD6dEPvsCzO",
      "name" : "Worth It",
      "popularity" : 97,
      "preview_url" : "https://p.scdn.co/mp3-preview/b45c47a90160e670d79fff22f6a76a672193ea22",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:41Fflg7qHiVOD6dEPvsCzO"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6WYHzLqNy9g3zNeqs9IwAA"
        },
        "href" : "https://api.spotify.com/v1/albums/6WYHzLqNy9g3zNeqs9IwAA",
        "id" : "6WYHzLqNy9g3zNeqs9IwAA",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/5f7cbbfeefa969e41bf555625703eea3d3079ad3",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/32a8c9fefd3defd5ea8f79f109eb46a0f60912cd",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8bae8894e8d240be5d58d24999aa10fae022f22f",
          "width" : 64
        } ],
        "name" : "Classic Man",
        "type" : "album",
        "uri" : "spotify:album:6WYHzLqNy9g3zNeqs9IwAA"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4TsHKU8l8Wq7n7OPVikirn"
        },
        "href" : "https://api.spotify.com/v1/artists/4TsHKU8l8Wq7n7OPVikirn",
        "id" : "4TsHKU8l8Wq7n7OPVikirn",
        "name" : "Jidenna",
        "type" : "artist",
        "uri" : "spotify:artist:4TsHKU8l8Wq7n7OPVikirn"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7hgRzsQGjlm1zifNoigyB9"
        },
        "href" : "https://api.spotify.com/v1/artists/7hgRzsQGjlm1zifNoigyB9",
        "id" : "7hgRzsQGjlm1zifNoigyB9",
        "name" : "Roman GianArthur",
        "type" : "artist",
        "uri" : "spotify:artist:7hgRzsQGjlm1zifNoigyB9"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 226000,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USSM11500430"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3G7XYAwtxtoGK7fAm4IlD9"
      },
      "href" : "https://api.spotify.com/v1/tracks/3G7XYAwtxtoGK7fAm4IlD9",
      "id" : "3G7XYAwtxtoGK7fAm4IlD9",
      "name" : "Classic Man",
      "popularity" : 89,
      "preview_url" : "https://p.scdn.co/mp3-preview/3f290569356f3541b161b21dd8094ce68c963b29",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:3G7XYAwtxtoGK7fAm4IlD9"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/33adlRyPCAvwy124YK646W"
        },
        "href" : "https://api.spotify.com/v1/albums/33adlRyPCAvwy124YK646W",
        "id" : "33adlRyPCAvwy124YK646W",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/0a8da792ce8862f6bf39d790ce0e410152c16e97",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/f282c9a8a997384bd45f35a904d18e8268f31577",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/1233ce588487324a966547910105ca127e9ab949",
          "width" : 64
        } ],
        "name" : "War Paint",
        "type" : "album",
        "uri" : "spotify:album:33adlRyPCAvwy124YK646W"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5qa31A9HySw3T7MKWI9bGg"
        },
        "href" : "https://api.spotify.com/v1/artists/5qa31A9HySw3T7MKWI9bGg",
        "id" : "5qa31A9HySw3T7MKWI9bGg",
        "name" : "FLETCHER",
        "type" : "artist",
        "uri" : "spotify:artist:5qa31A9HySw3T7MKWI9bGg"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 225788,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCACG1562736"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/46FDaONYM0jiJWTBIQCLUB"
      },
      "href" : "https://api.spotify.com/v1/tracks/46FDaONYM0jiJWTBIQCLUB",
      "id" : "46FDaONYM0jiJWTBIQCLUB",
      "name" : "War Paint",
      "popularity" : 82,
      "preview_url" : "https://p.scdn.co/mp3-preview/a11d695159be13c12f6232a7df497ec65ddb3abe",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:46FDaONYM0jiJWTBIQCLUB"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/59eUYETmE1zi31ESb3SUkI"
        },
        "href" : "https://api.spotify.com/v1/albums/59eUYETmE1zi31ESb3SUkI",
        "id" : "59eUYETmE1zi31ESb3SUkI",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/d4e179cf14800ae015c18029aa7f6b35a3c1a29a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/6db4601516dd20b3bc19279bfdbcb168c2335c3c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/943ec26cc94b2a222d4d1fcba682aeba4b2310eb",
          "width" : 64
        } ],
        "name" : "Everything Is 4",
        "type" : "album",
        "uri" : "spotify:album:59eUYETmE1zi31ESb3SUkI"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/07YZf4WDAMNwqr4jfgOZ8y"
        },
        "href" : "https://api.spotify.com/v1/artists/07YZf4WDAMNwqr4jfgOZ8y",
        "id" : "07YZf4WDAMNwqr4jfgOZ8y",
        "name" : "Jason Derulo",
        "type" : "artist",
        "uri" : "spotify:artist:07YZf4WDAMNwqr4jfgOZ8y"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4YXycRbyyAE0wozTk7QMEq"
        },
        "href" : "https://api.spotify.com/v1/artists/4YXycRbyyAE0wozTk7QMEq",
        "id" : "4YXycRbyyAE0wozTk7QMEq",
        "name" : "Matoma",
        "type" : "artist",
        "uri" : "spotify:artist:4YXycRbyyAE0wozTk7QMEq"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2DlGxzQSjYe5N6G9nkYghR"
        },
        "href" : "https://api.spotify.com/v1/artists/2DlGxzQSjYe5N6G9nkYghR",
        "id" : "2DlGxzQSjYe5N6G9nkYghR",
        "name" : "Jennifer Lopez",
        "type" : "artist",
        "uri" : "spotify:artist:2DlGxzQSjYe5N6G9nkYghR"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 200240,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USWB11504532"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4tg1G3X26wDTmQbipgxhp5"
      },
      "href" : "https://api.spotify.com/v1/tracks/4tg1G3X26wDTmQbipgxhp5",
      "id" : "4tg1G3X26wDTmQbipgxhp5",
      "name" : "Try Me (feat. Jennifer Lopez & Matoma)",
      "popularity" : 89,
      "preview_url" : "https://p.scdn.co/mp3-preview/3a1eeb21fae05ce78a9ec110d71e34748a4be188",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:4tg1G3X26wDTmQbipgxhp5"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1xC5ZY2CNi8t1GbYSRwoUm"
        },
        "href" : "https://api.spotify.com/v1/albums/1xC5ZY2CNi8t1GbYSRwoUm",
        "id" : "1xC5ZY2CNi8t1GbYSRwoUm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/5095784d20ed3da0e37b77012c63c59ee047e7b7",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3a72f9a19c93f8bea3201ccefd9a139f64ff9015",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/a3bebc1376822ba6d57927f9c64fe8c3b8b217ba",
          "width" : 64
        } ],
        "name" : "Back Together",
        "type" : "album",
        "uri" : "spotify:album:1xC5ZY2CNi8t1GbYSRwoUm"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0ZrpamOxcZybMHGg1AYtHP"
        },
        "href" : "https://api.spotify.com/v1/artists/0ZrpamOxcZybMHGg1AYtHP",
        "id" : "0ZrpamOxcZybMHGg1AYtHP",
        "name" : "Robin Thicke",
        "type" : "artist",
        "uri" : "spotify:artist:0ZrpamOxcZybMHGg1AYtHP"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh"
        },
        "href" : "https://api.spotify.com/v1/artists/0hCNtLu0JehylgoiP8L4Gh",
        "id" : "0hCNtLu0JehylgoiP8L4Gh",
        "name" : "Nicki Minaj",
        "type" : "artist",
        "uri" : "spotify:artist:0hCNtLu0JehylgoiP8L4Gh"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 224306,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71508245"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/16e3Ly7ddGqqnFDiWWWwnc"
      },
      "href" : "https://api.spotify.com/v1/tracks/16e3Ly7ddGqqnFDiWWWwnc",
      "id" : "16e3Ly7ddGqqnFDiWWWwnc",
      "name" : "Back Together",
      "popularity" : 74,
      "preview_url" : "https://p.scdn.co/mp3-preview/ab3712d2e84cb722848a158d91294ca8d84499a3",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:16e3Ly7ddGqqnFDiWWWwnc"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/13QoXGJgs22WiDG1NWT00D"
        },
        "href" : "https://api.spotify.com/v1/albums/13QoXGJgs22WiDG1NWT00D",
        "id" : "13QoXGJgs22WiDG1NWT00D",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/278bb7db7459a3b0b57a5600062ca778d6c2bd6a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/c5566180e1d35b59b479682908e24fd6977fafec",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/7403a4a426792c25c5ec1cacd222e14f45efdfdd",
          "width" : 64
        } ],
        "name" : "Sex Playlist",
        "type" : "album",
        "uri" : "spotify:album:13QoXGJgs22WiDG1NWT00D"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0f5nVCcR06GX8Qikz0COtT"
        },
        "href" : "https://api.spotify.com/v1/artists/0f5nVCcR06GX8Qikz0COtT",
        "id" : "0f5nVCcR06GX8Qikz0COtT",
        "name" : "Omarion",
        "type" : "artist",
        "uri" : "spotify:artist:0f5nVCcR06GX8Qikz0COtT"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z"
        },
        "href" : "https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z",
        "id" : "7bXgB6jMjp9ATFy66eO08Z",
        "name" : "Chris Brown",
        "type" : "artist",
        "uri" : "spotify:artist:7bXgB6jMjp9ATFy66eO08Z"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 226580,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USAT21404845"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0fgZUSa7D7aVvv3GfO0A1n"
      },
      "href" : "https://api.spotify.com/v1/tracks/0fgZUSa7D7aVvv3GfO0A1n",
      "id" : "0fgZUSa7D7aVvv3GfO0A1n",
      "name" : "Post To Be (feat. Chris Brown & Jhene Aiko)",
      "popularity" : 85,
      "preview_url" : "https://p.scdn.co/mp3-preview/3e16c002fe3c27fa641323876fb2a226cb77fb93",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:0fgZUSa7D7aVvv3GfO0A1n"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4jKdXIJckKh7la6xHuKwRT"
        },
        "href" : "https://api.spotify.com/v1/albums/4jKdXIJckKh7la6xHuKwRT",
        "id" : "4jKdXIJckKh7la6xHuKwRT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/8a874d9253924ef8e12301b0e27e8f460367bbcd",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/e280d50089e2d8a726b443f1f36eeccb709583ff",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/64fbb6fd489158427bd8e3cb1f91750a7cdb5ad8",
          "width" : 64
        } ],
        "name" : "True Colors",
        "type" : "album",
        "uri" : "spotify:album:4jKdXIJckKh7la6xHuKwRT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2qxJFvFYMEDqd7ui6kSAcq"
        },
        "href" : "https://api.spotify.com/v1/artists/2qxJFvFYMEDqd7ui6kSAcq",
        "id" : "2qxJFvFYMEDqd7ui6kSAcq",
        "name" : "Zedd",
        "type" : "artist",
        "uri" : "spotify:artist:2qxJFvFYMEDqd7ui6kSAcq"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/50JJSqHUf2RQ9xsHs0KMHg"
        },
        "href" : "https://api.spotify.com/v1/artists/50JJSqHUf2RQ9xsHs0KMHg",
        "id" : "50JJSqHUf2RQ9xsHs0KMHg",
        "name" : "Jon Bellion",
        "type" : "artist",
        "uri" : "spotify:artist:50JJSqHUf2RQ9xsHs0KMHg"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 218292,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71505090"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2ISSQPb9LHHiV6ng2NXosL"
      },
      "href" : "https://api.spotify.com/v1/tracks/2ISSQPb9LHHiV6ng2NXosL",
      "id" : "2ISSQPb9LHHiV6ng2NXosL",
      "name" : "Beautiful Now",
      "popularity" : 81,
      "preview_url" : "https://p.scdn.co/mp3-preview/48ce91f250164e4f158035c4ba3ae6c3a0b0faba",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:2ISSQPb9LHHiV6ng2NXosL"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1zz5kkBVYIei6t5ATsNhm0"
        },
        "href" : "https://api.spotify.com/v1/albums/1zz5kkBVYIei6t5ATsNhm0",
        "id" : "1zz5kkBVYIei6t5ATsNhm0",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/830206bcc552a157deb7490dccb69cedd8212dae",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/b8d7a38c2125e932f9d16e46ae738e2f54e0cb32",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/5fdebda623aae092adc1ca83b2f7c972cef2418f",
          "width" : 64
        } ],
        "name" : "New Americana",
        "type" : "album",
        "uri" : "spotify:album:1zz5kkBVYIei6t5ATsNhm0"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2"
        },
        "href" : "https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2",
        "id" : "26VFTg2z8YR0cCuwLzESi2",
        "name" : "Halsey",
        "type" : "artist",
        "uri" : "spotify:artist:26VFTg2z8YR0cCuwLzESi2"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 183808,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71507637"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/70FfnLougoxye4i9Z0EhB3"
      },
      "href" : "https://api.spotify.com/v1/tracks/70FfnLougoxye4i9Z0EhB3",
      "id" : "70FfnLougoxye4i9Z0EhB3",
      "name" : "New Americana",
      "popularity" : 79,
      "preview_url" : "https://p.scdn.co/mp3-preview/d6044e8136cefb0a2f039d9a8ae79b89ef9e75ae",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:70FfnLougoxye4i9Z0EhB3"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2KorcISo9JBqG6Siszd2AO"
        },
        "href" : "https://api.spotify.com/v1/albums/2KorcISo9JBqG6Siszd2AO",
        "id" : "2KorcISo9JBqG6Siszd2AO",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/f301387027b7bddea25e54b95c5ca909125b4474",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/a2f3d3d1500a1c805df082e0ebbd6d1fe769d55f",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/a09cec440bfdf33ed15e2fa25d30e595e6f364b4",
          "width" : 64
        } ],
        "name" : "Golden (feat. Sia)",
        "type" : "album",
        "uri" : "spotify:album:2KorcISo9JBqG6Siszd2AO"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7o9Nl7K1Al6NNAHX6jn6iG"
        },
        "href" : "https://api.spotify.com/v1/artists/7o9Nl7K1Al6NNAHX6jn6iG",
        "id" : "7o9Nl7K1Al6NNAHX6jn6iG",
        "name" : "Travie McCoy",
        "type" : "artist",
        "uri" : "spotify:artist:7o9Nl7K1Al6NNAHX6jn6iG"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5WUlDfRSoLAfcVSX1WnrxN"
        },
        "href" : "https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN",
        "id" : "5WUlDfRSoLAfcVSX1WnrxN",
        "name" : "Sia",
        "type" : "artist",
        "uri" : "spotify:artist:5WUlDfRSoLAfcVSX1WnrxN"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 215142,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USAT21501653"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0HZWWaKieQ9ZETkTEUVTH2"
      },
      "href" : "https://api.spotify.com/v1/tracks/0HZWWaKieQ9ZETkTEUVTH2",
      "id" : "0HZWWaKieQ9ZETkTEUVTH2",
      "name" : "Golden (feat. Sia)",
      "popularity" : 86,
      "preview_url" : "https://p.scdn.co/mp3-preview/1d1ff7286781c88553f809eee936d7595ea157b9",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:0HZWWaKieQ9ZETkTEUVTH2"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3Aw8a13WJi24hkjRRtMp9n"
        },
        "href" : "https://api.spotify.com/v1/albums/3Aw8a13WJi24hkjRRtMp9n",
        "id" : "3Aw8a13WJi24hkjRRtMp9n",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c15818d810e5e3aef8cba872403cb4260abc9748",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/1183462ab98479411a2d099e13b95b32ef45138e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/f258a0010c6b9c012c1cc88a69b238ff117b8cda",
          "width" : 64
        } ],
        "name" : "Freedom",
        "type" : "album",
        "uri" : "spotify:album:3Aw8a13WJi24hkjRRtMp9n"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8"
        },
        "href" : "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
        "id" : "2RdwBSPQiwcmiDo9kixcl8",
        "name" : "Pharrell Williams",
        "type" : "artist",
        "uri" : "spotify:artist:2RdwBSPQiwcmiDo9kixcl8"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 162466,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USSM11505220"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6RB9YvNyP0RZfCUcMtZELH"
      },
      "href" : "https://api.spotify.com/v1/tracks/6RB9YvNyP0RZfCUcMtZELH",
      "id" : "6RB9YvNyP0RZfCUcMtZELH",
      "name" : "Freedom",
      "popularity" : 88,
      "preview_url" : "https://p.scdn.co/mp3-preview/ef3ae8e32f500345f348305e75e858a127bf4bcf",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6RB9YvNyP0RZfCUcMtZELH"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/3kaQUt8Mp906u1fI0LDqO6"
        },
        "href" : "https://api.spotify.com/v1/albums/3kaQUt8Mp906u1fI0LDqO6",
        "id" : "3kaQUt8Mp906u1fI0LDqO6",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/7631f246135ce27dadba72b40238855a4b323078",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/aa82e12fe28ea0602243644271309503d396ae7d",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/d5aaa9d80e249bba88a6ec7e5d5fd9f507b26d3d",
          "width" : 64
        } ],
        "name" : "The Original High (Deluxe Version)",
        "type" : "album",
        "uri" : "spotify:album:3kaQUt8Mp906u1fI0LDqO6"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6prmLEyn4LfHlD9NnXWlf7"
        },
        "href" : "https://api.spotify.com/v1/artists/6prmLEyn4LfHlD9NnXWlf7",
        "id" : "6prmLEyn4LfHlD9NnXWlf7",
        "name" : "Adam Lambert",
        "type" : "artist",
        "uri" : "spotify:artist:6prmLEyn4LfHlD9NnXWlf7"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 208330,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USWB11504265"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/44aN5xKL3kGHvQ5bXVk6B8"
      },
      "href" : "https://api.spotify.com/v1/tracks/44aN5xKL3kGHvQ5bXVk6B8",
      "id" : "44aN5xKL3kGHvQ5bXVk6B8",
      "name" : "Ghost Town",
      "popularity" : 89,
      "preview_url" : "https://p.scdn.co/mp3-preview/75b9334c1cf0da6e62a86d4d5719645d472213f2",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:44aN5xKL3kGHvQ5bXVk6B8"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7COsTg4fY06rHnRVpnlhHH"
        },
        "href" : "https://api.spotify.com/v1/albums/7COsTg4fY06rHnRVpnlhHH",
        "id" : "7COsTg4fY06rHnRVpnlhHH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/d0fa186ef070345e82c3e5fd385b4e35e9fa04e0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3799eebaa905e5c88d2c295fac7b89ceb70d1c6e",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/19af0f46ee467aeb055736690ea874864e16178f",
          "width" : 64
        } ],
        "name" : "Cheerleader (Felix Jaehn vs Salaam Remi Remix)",
        "type" : "album",
        "uri" : "spotify:album:7COsTg4fY06rHnRVpnlhHH"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5MouCg6ta7zAxsfMEbc1uh"
        },
        "href" : "https://api.spotify.com/v1/artists/5MouCg6ta7zAxsfMEbc1uh",
        "id" : "5MouCg6ta7zAxsfMEbc1uh",
        "name" : "OMI",
        "type" : "artist",
        "uri" : "spotify:artist:5MouCg6ta7zAxsfMEbc1uh"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6KZDXtSj0SzGOV705nNeh3"
        },
        "href" : "https://api.spotify.com/v1/artists/6KZDXtSj0SzGOV705nNeh3",
        "id" : "6KZDXtSj0SzGOV705nNeh3",
        "name" : "Kid Ink",
        "type" : "artist",
        "uri" : "spotify:artist:6KZDXtSj0SzGOV705nNeh3"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 181984,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USUS11203554"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/73mE3nfR4jSuJMGHmcGOlp"
      },
      "href" : "https://api.spotify.com/v1/tracks/73mE3nfR4jSuJMGHmcGOlp",
      "id" : "73mE3nfR4jSuJMGHmcGOlp",
      "name" : "Cheerleader - Felix Jaehn vs Salaam Remi Remix",
      "popularity" : 73,
      "preview_url" : "https://p.scdn.co/mp3-preview/ee6346aaf4a737360ef5ba595bdebac9509693fc",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:73mE3nfR4jSuJMGHmcGOlp"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4DOcG4A40Wf3q2vPNGQwQg"
        },
        "href" : "https://api.spotify.com/v1/albums/4DOcG4A40Wf3q2vPNGQwQg",
        "id" : "4DOcG4A40Wf3q2vPNGQwQg",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/d63042fc45a0a29fba3f8a6a6dfb8549de365c50",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/62e3e7dc25d58c54dcb94fc9f301306af8146046",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/0ac4fd514b8211beac83f6a2d162f1899c6caa23",
          "width" : 64
        } ],
        "name" : "Peace Is The Mission",
        "type" : "album",
        "uri" : "spotify:album:4DOcG4A40Wf3q2vPNGQwQg"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/738wLrAtLtCtFOLvQBXOXp"
        },
        "href" : "https://api.spotify.com/v1/artists/738wLrAtLtCtFOLvQBXOXp",
        "id" : "738wLrAtLtCtFOLvQBXOXp",
        "name" : "Major Lazer",
        "type" : "artist",
        "uri" : "spotify:artist:738wLrAtLtCtFOLvQBXOXp"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0bdfiayQAKewqEvaU6rXCv"
        },
        "href" : "https://api.spotify.com/v1/artists/0bdfiayQAKewqEvaU6rXCv",
        "id" : "0bdfiayQAKewqEvaU6rXCv",
        "name" : "MØ",
        "type" : "artist",
        "uri" : "spotify:artist:0bdfiayQAKewqEvaU6rXCv"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4"
        },
        "href" : "https://api.spotify.com/v1/artists/540vIaP2JwjQb9dm3aArA4",
        "id" : "540vIaP2JwjQb9dm3aArA4",
        "name" : "DJ Snake",
        "type" : "artist",
        "uri" : "spotify:artist:540vIaP2JwjQb9dm3aArA4"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 176561,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "QMUY41500008"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4vS8VaBwJJV5Ry7UFIQuoo"
      },
      "href" : "https://api.spotify.com/v1/tracks/4vS8VaBwJJV5Ry7UFIQuoo",
      "id" : "4vS8VaBwJJV5Ry7UFIQuoo",
      "name" : "Lean On (feat. MØ & DJ Snake)",
      "popularity" : 91,
      "preview_url" : "https://p.scdn.co/mp3-preview/5e12efcb716926b0efc6659957d65f35dec3ac86",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:4vS8VaBwJJV5Ry7UFIQuoo"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LV", "MC", "MT", "MY", "NI", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1Ba3HDw1at35UVxMxLCdCa"
        },
        "href" : "https://api.spotify.com/v1/albums/1Ba3HDw1at35UVxMxLCdCa",
        "id" : "1Ba3HDw1at35UVxMxLCdCa",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/b83a498abfbb204ba29a9a3eba23f05b57fefa2a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/41d87660c22267b6716a376b6492f54d661c9b76",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/99a16d5d0cda79091bd5223ffc207579bd86c6a7",
          "width" : 64
        } ],
        "name" : "Show Me Love",
        "type" : "album",
        "uri" : "spotify:album:1Ba3HDw1at35UVxMxLCdCa"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/20gsENnposVs2I4rQ5kvrf"
        },
        "href" : "https://api.spotify.com/v1/artists/20gsENnposVs2I4rQ5kvrf",
        "id" : "20gsENnposVs2I4rQ5kvrf",
        "name" : "Sam Feldt",
        "type" : "artist",
        "uri" : "spotify:artist:20gsENnposVs2I4rQ5kvrf"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3dfslm6CkJXlsvGSQxGgxt"
        },
        "href" : "https://api.spotify.com/v1/artists/3dfslm6CkJXlsvGSQxGgxt",
        "id" : "3dfslm6CkJXlsvGSQxGgxt",
        "name" : "Kimberly Anne",
        "type" : "artist",
        "uri" : "spotify:artist:3dfslm6CkJXlsvGSQxGgxt"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LV", "MC", "MT", "MY", "NI", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 181867,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "NLZ541500291"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6ksRossV4vKsXntCCZbhaM"
      },
      "href" : "https://api.spotify.com/v1/tracks/6ksRossV4vKsXntCCZbhaM",
      "id" : "6ksRossV4vKsXntCCZbhaM",
      "name" : "Show Me Love",
      "popularity" : 87,
      "preview_url" : "https://p.scdn.co/mp3-preview/3787baa09decca5a5bc69d267dfe4dc4a3dced65",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6ksRossV4vKsXntCCZbhaM"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5yscEifoZw3M3abIVCr8ed"
        },
        "href" : "https://api.spotify.com/v1/albums/5yscEifoZw3M3abIVCr8ed",
        "id" : "5yscEifoZw3M3abIVCr8ed",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e8a7307f697dbb64318f6b17dbd0f6889da46344",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/795ce52a64136e593cd962ca95ca188d770aab2c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/083aa73d3ddc515ed4aac2745ec88856cfbd3d51",
          "width" : 64
        } ],
        "name" : "This Mixtape is Fire.",
        "type" : "album",
        "uri" : "spotify:album:5yscEifoZw3M3abIVCr8ed"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5R3Hr2cnCCjt220Jmt2xLf"
        },
        "href" : "https://api.spotify.com/v1/artists/5R3Hr2cnCCjt220Jmt2xLf",
        "id" : "5R3Hr2cnCCjt220Jmt2xLf",
        "name" : "Dillon Francis",
        "type" : "artist",
        "uri" : "spotify:artist:5R3Hr2cnCCjt220Jmt2xLf"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/23fqKkggKUBHNkbKtXEls4"
        },
        "href" : "https://api.spotify.com/v1/artists/23fqKkggKUBHNkbKtXEls4",
        "id" : "23fqKkggKUBHNkbKtXEls4",
        "name" : "Kygo",
        "type" : "artist",
        "uri" : "spotify:artist:23fqKkggKUBHNkbKtXEls4"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0lzV2CiahHRiGd6qpADtPS"
        },
        "href" : "https://api.spotify.com/v1/artists/0lzV2CiahHRiGd6qpADtPS",
        "id" : "0lzV2CiahHRiGd6qpADtPS",
        "name" : "James Hersey",
        "type" : "artist",
        "uri" : "spotify:artist:0lzV2CiahHRiGd6qpADtPS"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 178333,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USSM11505217"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6m3ZWIXhjoV76syT1j2oE9"
      },
      "href" : "https://api.spotify.com/v1/tracks/6m3ZWIXhjoV76syT1j2oE9",
      "id" : "6m3ZWIXhjoV76syT1j2oE9",
      "name" : "Coming Over",
      "popularity" : 75,
      "preview_url" : "https://p.scdn.co/mp3-preview/a6e1f68c2249a7adb28a82da676aaab22398d8ac",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:6m3ZWIXhjoV76syT1j2oE9"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2mx2hlgAtxrXrWRnerdVGB"
        },
        "href" : "https://api.spotify.com/v1/albums/2mx2hlgAtxrXrWRnerdVGB",
        "id" : "2mx2hlgAtxrXrWRnerdVGB",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/15ac85fd32db7c86ac3ab88b0b72aa15bfd22007",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/b06536e4e98d291e0d4dd909074b3bdc32d9c7f3",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/90e8c9f6bcafd3e009b68e1dc3cd6297c4b1ace1",
          "width" : 64
        } ],
        "name" : "Body on Me",
        "type" : "album",
        "uri" : "spotify:album:2mx2hlgAtxrXrWRnerdVGB"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5CCwRZC6euC8Odo6y9X8jr"
        },
        "href" : "https://api.spotify.com/v1/artists/5CCwRZC6euC8Odo6y9X8jr",
        "id" : "5CCwRZC6euC8Odo6y9X8jr",
        "name" : "Rita Ora",
        "type" : "artist",
        "uri" : "spotify:artist:5CCwRZC6euC8Odo6y9X8jr"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z"
        },
        "href" : "https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z",
        "id" : "7bXgB6jMjp9ATFy66eO08Z",
        "name" : "Chris Brown",
        "type" : "artist",
        "uri" : "spotify:artist:7bXgB6jMjp9ATFy66eO08Z"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 225217,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USQX91501237"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3qRHCvn70YpVFFkx3lrAYf"
      },
      "href" : "https://api.spotify.com/v1/tracks/3qRHCvn70YpVFFkx3lrAYf",
      "id" : "3qRHCvn70YpVFFkx3lrAYf",
      "name" : "Body on Me",
      "popularity" : 82,
      "preview_url" : "https://p.scdn.co/mp3-preview/0c9291b9f53022b4945841d9edd61fb9f121c3b7",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:3qRHCvn70YpVFFkx3lrAYf"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4Y3T5MRPv5Ey9TQPTjAcKo"
        },
        "href" : "https://api.spotify.com/v1/albums/4Y3T5MRPv5Ey9TQPTjAcKo",
        "id" : "4Y3T5MRPv5Ey9TQPTjAcKo",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/bbe311799fa8681a1f0bc40e194760d60ae729a7",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ad8c4a429cf198daee192d795379445be2d7f5cd",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/1b4826032bc39c689a919f2942c208e7a808f370",
          "width" : 64
        } ],
        "name" : "New Thang",
        "type" : "album",
        "uri" : "spotify:album:4Y3T5MRPv5Ey9TQPTjAcKo"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3mH3OBKopDDVgnJcT5PrPk"
        },
        "href" : "https://api.spotify.com/v1/artists/3mH3OBKopDDVgnJcT5PrPk",
        "id" : "3mH3OBKopDDVgnJcT5PrPk",
        "name" : "Redfoo",
        "type" : "artist",
        "uri" : "spotify:artist:3mH3OBKopDDVgnJcT5PrPk"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 226800,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCABZ1405080"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4PVm8e67skz8B8wiJP2kwk"
      },
      "href" : "https://api.spotify.com/v1/tracks/4PVm8e67skz8B8wiJP2kwk",
      "id" : "4PVm8e67skz8B8wiJP2kwk",
      "name" : "New Thang",
      "popularity" : 86,
      "preview_url" : "https://p.scdn.co/mp3-preview/6b4fec0281ae749409d6afa79af62372cd45e1ad",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:4PVm8e67skz8B8wiJP2kwk"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/30QwSnTFUhCGee32ng1tvL"
        },
        "href" : "https://api.spotify.com/v1/albums/30QwSnTFUhCGee32ng1tvL",
        "id" : "30QwSnTFUhCGee32ng1tvL",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/6025712901703a86b056e740ca58345353db9729",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/24c9b92893b72cc9a035b3e8d48dcf3abccd9acc",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/895c41ca5261c154a76d3875b298cdee713fdd3d",
          "width" : 64
        } ],
        "name" : "Unbreakable Smile",
        "type" : "album",
        "uri" : "spotify:album:30QwSnTFUhCGee32ng1tvL"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1vSN1fsvrzpbttOYGsliDr"
        },
        "href" : "https://api.spotify.com/v1/artists/1vSN1fsvrzpbttOYGsliDr",
        "id" : "1vSN1fsvrzpbttOYGsliDr",
        "name" : "Tori Kelly",
        "type" : "artist",
        "uri" : "spotify:artist:1vSN1fsvrzpbttOYGsliDr"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 186477,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71505910"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5Llo0YjyWmLc7LJd4DLljJ"
      },
      "href" : "https://api.spotify.com/v1/tracks/5Llo0YjyWmLc7LJd4DLljJ",
      "id" : "5Llo0YjyWmLc7LJd4DLljJ",
      "name" : "Should’ve Been Us",
      "popularity" : 80,
      "preview_url" : "https://p.scdn.co/mp3-preview/45462d145f9e766bc52b359ab56577a98854b4e1",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:5Llo0YjyWmLc7LJd4DLljJ"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5NsQCNMLdKVFF1DwOIK6wm"
        },
        "href" : "https://api.spotify.com/v1/albums/5NsQCNMLdKVFF1DwOIK6wm",
        "id" : "5NsQCNMLdKVFF1DwOIK6wm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/f8f9e65f53b4440888d9048a3afd78be96b9b3e0",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/4f80c7659bb3131e161a59f090e74aa86ce2589a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/410b3a9239f8e9a1ca874b93012db3b85e44f23b",
          "width" : 64
        } ],
        "name" : "Psycadelik Thoughtz",
        "type" : "album",
        "uri" : "spotify:album:5NsQCNMLdKVFF1DwOIK6wm"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5ndkK3dpZLKtBklKjxNQwT"
        },
        "href" : "https://api.spotify.com/v1/artists/5ndkK3dpZLKtBklKjxNQwT",
        "id" : "5ndkK3dpZLKtBklKjxNQwT",
        "name" : "B.o.B",
        "type" : "artist",
        "uri" : "spotify:artist:5ndkK3dpZLKtBklKjxNQwT"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6If57j6e3TXXk0HiLcIZca"
        },
        "href" : "https://api.spotify.com/v1/artists/6If57j6e3TXXk0HiLcIZca",
        "id" : "6If57j6e3TXXk0HiLcIZca",
        "name" : "Sevyn Streeter",
        "type" : "artist",
        "uri" : "spotify:artist:6If57j6e3TXXk0HiLcIZca"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 216876,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USAT21502499"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4BFb06t2AWUA3mWMbIePmA"
      },
      "href" : "https://api.spotify.com/v1/tracks/4BFb06t2AWUA3mWMbIePmA",
      "id" : "4BFb06t2AWUA3mWMbIePmA",
      "name" : "Love Life (feat. Sevyn Streeter)",
      "popularity" : 68,
      "preview_url" : "https://p.scdn.co/mp3-preview/8913038210e7dfdb0872c3e8b835e2d018ddf68e",
      "track_number" : 10,
      "type" : "track",
      "uri" : "spotify:track:4BFb06t2AWUA3mWMbIePmA"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "album",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5eLVoIPq7P3Bu29lVgD4x0"
        },
        "href" : "https://api.spotify.com/v1/albums/5eLVoIPq7P3Bu29lVgD4x0",
        "id" : "5eLVoIPq7P3Bu29lVgD4x0",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/40bcd85ff0c290b41f3e818c3de810182473ec77",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/3fedaddbc1b8c805d701fd98c22436db258a783a",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/0a5cc111bebf46c4987f004d92967176f928945f",
          "width" : 64
        } ],
        "name" : "Professional Rapper",
        "type" : "album",
        "uri" : "spotify:album:5eLVoIPq7P3Bu29lVgD4x0"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1tqhsYv8yBBdwANFNzHtcr"
        },
        "href" : "https://api.spotify.com/v1/artists/1tqhsYv8yBBdwANFNzHtcr",
        "id" : "1tqhsYv8yBBdwANFNzHtcr",
        "name" : "Lil Dicky",
        "type" : "artist",
        "uri" : "spotify:artist:1tqhsYv8yBBdwANFNzHtcr"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6eYFryfcEu3QSq59D62wZQ"
        },
        "href" : "https://api.spotify.com/v1/artists/6eYFryfcEu3QSq59D62wZQ",
        "id" : "6eYFryfcEu3QSq59D62wZQ",
        "name" : "Brendon Urie",
        "type" : "artist",
        "uri" : "spotify:artist:6eYFryfcEu3QSq59D62wZQ"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 244339,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "QM4HH1550007"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0NBiC3zLXoBQXBjsbnbwJq"
      },
      "href" : "https://api.spotify.com/v1/tracks/0NBiC3zLXoBQXBjsbnbwJq",
      "id" : "0NBiC3zLXoBQXBjsbnbwJq",
      "name" : "Molly (feat. Brendon Urie of Panic at the Disco)",
      "popularity" : 76,
      "preview_url" : "https://p.scdn.co/mp3-preview/96141d9bde6269766e1ca4cb9fc1a51f6303561f",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:0NBiC3zLXoBQXBjsbnbwJq"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6mQGo1a9mXHNUSJYwXi9Wd"
        },
        "href" : "https://api.spotify.com/v1/albums/6mQGo1a9mXHNUSJYwXi9Wd",
        "id" : "6mQGo1a9mXHNUSJYwXi9Wd",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/64e62e03f46d0c0d3dc5381c04a0b6e813c38c86",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/2a80dc83c03581ca243d467193f33a93aaf30bb3",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/b7e3972f710f039fe3c7bcb44cf350b0c3210ae1",
          "width" : 64
        } ],
        "name" : "You Know You Like It",
        "type" : "album",
        "uri" : "spotify:album:6mQGo1a9mXHNUSJYwXi9Wd"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1S27BTJeiZaQqBLlNuXZuw"
        },
        "href" : "https://api.spotify.com/v1/artists/1S27BTJeiZaQqBLlNuXZuw",
        "id" : "1S27BTJeiZaQqBLlNuXZuw",
        "name" : "DJ Snake & AlunaGeorge",
        "type" : "artist",
        "uri" : "spotify:artist:1S27BTJeiZaQqBLlNuXZuw"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 247266,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71414293"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/57kR5SniQIbsbVoIjjOUDa"
      },
      "href" : "https://api.spotify.com/v1/tracks/57kR5SniQIbsbVoIjjOUDa",
      "id" : "57kR5SniQIbsbVoIjjOUDa",
      "name" : "You Know You Like It",
      "popularity" : 90,
      "preview_url" : "https://p.scdn.co/mp3-preview/3529c9e67a3c6c12de57617576be8f8ec68f641c",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:57kR5SniQIbsbVoIjjOUDa"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7did2cuQyRc2qF6EKsZSDW"
        },
        "href" : "https://api.spotify.com/v1/albums/7did2cuQyRc2qF6EKsZSDW",
        "id" : "7did2cuQyRc2qF6EKsZSDW",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/b64ff2453177e7b435a283a1d6255568995f9f98",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/f8fa0c9908bfcb551089dec57b9e4a0ead75a7fe",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/5e926ba8e0d7331b7725e669511b9e19210e7fa8",
          "width" : 64
        } ],
        "name" : "Sound Of Your Heart",
        "type" : "album",
        "uri" : "spotify:album:7did2cuQyRc2qF6EKsZSDW"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/7blkMNJv8n9ceP9zlA4W2U"
        },
        "href" : "https://api.spotify.com/v1/artists/7blkMNJv8n9ceP9zlA4W2U",
        "id" : "7blkMNJv8n9ceP9zlA4W2U",
        "name" : "Shawn Hook",
        "type" : "artist",
        "uri" : "spotify:artist:7blkMNJv8n9ceP9zlA4W2U"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 198960,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "CAP001400201"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3y1ghrdtGHGOfQHsh9vfNc"
      },
      "href" : "https://api.spotify.com/v1/tracks/3y1ghrdtGHGOfQHsh9vfNc",
      "id" : "3y1ghrdtGHGOfQHsh9vfNc",
      "name" : "Sound Of Your Heart",
      "popularity" : 77,
      "preview_url" : "https://p.scdn.co/mp3-preview/e2dec40bbbcaf319bd575bdb8315600ae4ff3e56",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:3y1ghrdtGHGOfQHsh9vfNc"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2Vd3aVbpKUyRq42B7xd2HW"
        },
        "href" : "https://api.spotify.com/v1/albums/2Vd3aVbpKUyRq42B7xd2HW",
        "id" : "2Vd3aVbpKUyRq42B7xd2HW",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e86b1e6ac40b742a8307fdb186745bbf820c6812",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/44b6d2d6adfd65fbe32a52047e5cd2d98e4e1e63",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/090c86e2ec5e9998307b4a29b1af9265efde996f",
          "width" : 64
        } ],
        "name" : "Omen (Radio Edit)",
        "type" : "album",
        "uri" : "spotify:album:2Vd3aVbpKUyRq42B7xd2HW"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6nS5roXSAGhTGr34W6n7Et"
        },
        "href" : "https://api.spotify.com/v1/artists/6nS5roXSAGhTGr34W6n7Et",
        "id" : "6nS5roXSAGhTGr34W6n7Et",
        "name" : "Disclosure",
        "type" : "artist",
        "uri" : "spotify:artist:6nS5roXSAGhTGr34W6n7Et"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
        },
        "href" : "https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI",
        "id" : "2wY79sveU1sp5g7SokKOiI",
        "name" : "Sam Smith",
        "type" : "artist",
        "uri" : "spotify:artist:2wY79sveU1sp5g7SokKOiI"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 196817,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBUM71504534"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/78EQ5LZGgviMU9k0zrqv1r"
      },
      "href" : "https://api.spotify.com/v1/tracks/78EQ5LZGgviMU9k0zrqv1r",
      "id" : "78EQ5LZGgviMU9k0zrqv1r",
      "name" : "Omen - Radio Edit",
      "popularity" : 84,
      "preview_url" : "https://p.scdn.co/mp3-preview/b0e9a64af39c91eb9b96e389d80d79b9b09313d4",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:78EQ5LZGgviMU9k0zrqv1r"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6qxicqIu3kwUFQfW9LDbIy"
        },
        "href" : "https://api.spotify.com/v1/albums/6qxicqIu3kwUFQfW9LDbIy",
        "id" : "6qxicqIu3kwUFQfW9LDbIy",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e1b09e3ec57019cfd177c23a8689e9304444ca2e",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/47c919321b136509376c7739886290384227d9fd",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/df50557965110a531c92a756844ba56a9ecb58c1",
          "width" : 64
        } ],
        "name" : "The Truth",
        "type" : "album",
        "uri" : "spotify:album:6qxicqIu3kwUFQfW9LDbIy"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2KsP6tYLJlTBvSUxnwlVWa"
        },
        "href" : "https://api.spotify.com/v1/artists/2KsP6tYLJlTBvSUxnwlVWa",
        "id" : "2KsP6tYLJlTBvSUxnwlVWa",
        "name" : "Mike Posner",
        "type" : "artist",
        "uri" : "spotify:artist:2KsP6tYLJlTBvSUxnwlVWa"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 234892,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUM71506076"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5OyibkkbtWVY2LYfiC9azq"
      },
      "href" : "https://api.spotify.com/v1/tracks/5OyibkkbtWVY2LYfiC9azq",
      "id" : "5OyibkkbtWVY2LYfiC9azq",
      "name" : "Not That Simple",
      "popularity" : 64,
      "preview_url" : "https://p.scdn.co/mp3-preview/010efa642514a2c956ca0fbe57172a39bab307e8",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:5OyibkkbtWVY2LYfiC9azq"
    }
  }, {
    "added_at" : "2015-08-14T20:53:22Z",
    "added_by" : {
      "external_urls" : {
        "spotify" : "http://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "is_local" : false,
    "track" : {
      "album" : {
        "album_type" : "single",
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/1P13yMkVBAGy1iXoVwczYl"
        },
        "href" : "https://api.spotify.com/v1/albums/1P13yMkVBAGy1iXoVwczYl",
        "id" : "1P13yMkVBAGy1iXoVwczYl",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/51dcfba81d748a064c18004629714b29ec305bb7",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/309f56614ae3f891aeb28cdf0601467742240e52",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ba15ec8df42a7d1a940caa549d050a2691b66661",
          "width" : 64
        } ],
        "name" : "Save Me",
        "type" : "album",
        "uri" : "spotify:album:1P13yMkVBAGy1iXoVwczYl"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6YvP6AXefuZ3bROoEVjCiY"
        },
        "href" : "https://api.spotify.com/v1/artists/6YvP6AXefuZ3bROoEVjCiY",
        "id" : "6YvP6AXefuZ3bROoEVjCiY",
        "name" : "LISTENBEE",
        "type" : "artist",
        "uri" : "spotify:artist:6YvP6AXefuZ3bROoEVjCiY"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2Ohz3BAbalahBYLuM836cd"
        },
        "href" : "https://api.spotify.com/v1/artists/2Ohz3BAbalahBYLuM836cd",
        "id" : "2Ohz3BAbalahBYLuM836cd",
        "name" : "Naz Tokio",
        "type" : "artist",
        "uri" : "spotify:artist:2Ohz3BAbalahBYLuM836cd"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SI", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 210706,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "DEE861400837"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1Qg0JhbqPhYki1a5bv7NgH"
      },
      "href" : "https://api.spotify.com/v1/tracks/1Qg0JhbqPhYki1a5bv7NgH",
      "id" : "1Qg0JhbqPhYki1a5bv7NgH",
      "name" : "Save Me",
      "popularity" : 86,
      "preview_url" : "https://p.scdn.co/mp3-preview/60e7f94d8b53f862cd5e73d41e714576f3d62d33",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:1Qg0JhbqPhYki1a5bv7NgH"
    }
  } ],
  "limit" : 100,
  "next" : null,
  "offset" : 0,
  "previous" : null,
  "total" : 50
};
}]);