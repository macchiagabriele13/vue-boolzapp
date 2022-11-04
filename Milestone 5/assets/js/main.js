const { createApp } = Vue

createApp({
    data() {
        return {
            newSent: {
                date: new Date(),
                message: '',
                status: 'sent'
            },
            newReceived: {
                date: new Date(),
                message: 'Ok!',
                status: 'received'
            },
            searchName: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeIndex: 0,
        }
    },
    methods: {
        setActiveIndex(index) {
            this.activeIndex = index

        },


        /* ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
        “enter” il testo viene aggiunto al thread sopra, come messaggio verde
        
        Esercizio simile a quello della To do List, dove inserisco il messaggio e cliccando enter lo vado a pushare all'interno del mio Arrey */


        addNewMessage() {
            const newMessage = {
                ...this.newSent
            }
            console.log('ho cliccato enter');
            this.contacts[this.activeIndex].messages.push(newMessage)
            this.newSent.message = ''
            this.addReceivedMessage()
        },

        addReceivedMessage() {
            setTimeout(() => {

                this.contacts[this.activeIndex].messages.push(this.newReceived)
            }, 1000);
        },

        time(i) {
            /* const time = new Date(this.contacts[i].messages[this.contacts[i].messages.length - 1].date);
            console.log(time);
            const hoursAndMinutes = time.getHours() + ':' + time.getMinutes();
            return hoursAndMinutes; */


            let time = this.contacts[this.activeIndex].messages[this.index]
            console.log(time);


        },
        searchContact(){
            this.contacts.forEach(contact => {
        
                if (contact.name.toLowerCase().includes(this.searchName.toLowerCase())) {
                    contact.visible=true
                    console.log(contact.visible);

                }else{
                    contact.visible=false
                    console.log(contact.visible);
                }
            });
        },
        done(i){
            this.contacts[this.activeIndex].messages.splice(i, 1)
      },
    }
}).mount('#app')


/*  Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde

Esercizio simile a quello della To do List, dove inserisco il messaggio e cliccando enter lo vado a pushare all'interno del mio Arrey


● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

All'interno della funzione per creare il messaggio e inserirlo nell'arrey, metto un SetInterval o qualcosa del genere per farsì che dopo 1 secondo succeda qualcosa, quel qualcosa sarà un messaggio di ok, con classe ricevuto da inserire sempre nell'array

*/



/* Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina) */
