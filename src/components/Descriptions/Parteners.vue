<template>
  <div
    id="e3"
    style="max-width: 400px; margin: auto;"
    class="grey lighten-3"
  >
    <v-toolbar
      color="blue-grey"
      dark
    >
      <v-toolbar-title>My Parteners</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text"><p></p>
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_650,q_auto,w_1000/itemimages/32/49/324911_v8.jpeg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Hôtel Sofitel Algiers Hamma Garden</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-rating v-model="rating"></v-rating>
              </v-card-actions>
              <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Luxury and comfort await at the Sofitel Algiers Hamma Garden hotel. Located next to the Test Garden of Hamma, our establishment offers 309 rooms and 26 spacious, air-conditioned suites with free WIFI access. Our 3 restaurants offering French or regional gourmet dishes, bar, terrace with swimming pool, solarium and fitness room make this the perfect place to relax. Our hotel can also host your professional events in its 6 meeting rooms.
          </v-card-text>
        </v-slide-y-transition>
    
            </v-card>
          </v-flex>
      

          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cache.marriott.com/marriottassets/marriott/ORNSI/ornsi-exterior-7125-hor-wide.jpg?downsize=1440px:*"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Sheraton Oran Hotel</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-rating v-model="rating1"></v-rating>
              </v-card-actions>
              <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show1 = !show1">
            <v-icon>{{ show1 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show1">
            Located in Seddikia area, just 10 mn from Oran city center, overlooking one of the most beautiful bays of Algeria. Since the opening, Sheraton Oran has been THE place to meet in Oran, a symbol of Effortless Travel , renewal and progress. Oran is the 2nd largest city in Algeria, full of warm and welcoming people.The hotel is composed of 321 large rooms, 3 restaurants and an authentic English Pub, indoor and outdoor swimming pools, fitness, large conference rooms with 6 meetings rooms and a conference center, daylight breakout rooms.People come to Sheraton Oran to connect and have a drink at l’Atrium lobby bar in our comfortable armchairs, in a relaxing atmosphere near the fountain, watching sports between friends at the Pub, or for a romantic dinner relishing seafood and overlooking Oran’s bay in a jazzy atmosphere in Le Ciel d’Oran.All these elements contribute to make Sheraton Oran the place to meet in the city, for leisure, business or family events as well.
          </v-card-text>
        </v-slide-y-transition>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card color="purple" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Sheraton Club des Pins Resort</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    src="https://cache.marriott.com/marriottassets/marriott/ALGSI/algsi-exterior-entrance-9768-hor-wide.jpg?downsize=1440px:*"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-rating v-model="rating2"></v-rating>
              </v-card-actions>
              <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn icon @click="show2 = !show2">
            <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show2">
            Sheraton Club Des Pins is ideally located on the western tip. Offering a memorable stay in one of our 419 welcoming guest rooms and suites, each present inspiring views of our serene garden or the sparkling Mediterranean Sea through windows that open. Join the fun, where a seemingly limitless selection of activities creates a social atmosphere. Relax at one of our two pools or on the transparent waters of the private beach, and enjoy a full complement of activities at Club Nautique. Time is always well spent on our outdoor tennis courts or in the state-of-the-art Gym. Partake in a culinary odyssey every night; from our café and all-day international restaurant Le Brasserie, offering a nightly themed buffet, to the Italian-inspired La Trattoria to the diverse cuisines of Pan Asia, we take you around the world, or you can eat like a local at Le Tassili, our Algerian-Middle Eastern restaurant featuring daily entertainment alongside regional specialties. Beach and poolside snacks.
          </v-card-text>
        </v-slide-y-transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>
<script>
  export default {
    data: () => ({
      show: false,
     show1: false,
     show2: false,
     rating: 3,
     rating1: 3,
     rating2: 3,


    })
  }
</script>