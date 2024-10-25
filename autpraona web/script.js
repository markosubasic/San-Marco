document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('googleMap')) {
        initMap();
    }
});

function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(45.76216417577449, 15.960886003427122), // Koordinate za Glogovečka 2D
        zoom: 15,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    { "color": "#e8f4fa" }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    { "color": "#1e3a5f" }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#2c6fbb" }
                ]
            }
        ]
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: { lat: 45.76216417577449, lng: 15.960886003427122 }, // Koordinate za Glogovečka 2D
        map: map,
        title: "Autopraonica San Marco"
    });

    var infoWindow = new google.maps.InfoWindow({
        content: "<h4>Autopraonica San Marco</h4><p>Posjetite nas na adresi Glogovečka 2D, Zagreb.</p>"
    });

    marker.addListener("click", function() {
        infoWindow.open(map, marker);
    });
}

/* Dodavanje CSS stilova za kartu, sliku pune širine i kontakt gumb s fokusom na mobilni uređaj */
const css = `
    #googleMap {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 20px 0;
    }

    .full-width-image {
        width: 100%;
        height: auto;
        margin: 20px 0;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    #contact-button {
        display: block;
        width: calc(100% - 40px);
        max-width: 400px;
        margin: 20px auto;
        padding: 15px;
        background-color: #1e3a5f;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-size: 18px;
        text-align: center;
        transition: background-color 0.3s;
    }

    #contact-button:hover {
        background-color: #2c6fbb;
    }

    @media (max-width: 768px) {
        #googleMap {
            height: 250px;
        }
        #contact-button {
            font-size: 16px;
            padding: 12px;
        }
    }

    @media (max-width: 480px) {
        #googleMap {
            height: 200px;
        }
        #contact-button {
            font-size: 14px;
            padding: 10px;
        }
    }
`;

// Stvaranje <style> elementa i dodavanje u <head>
const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(css));
document.head.appendChild(styleElement);


