var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_SELEKSILAYERSIG_0 = new ol.format.GeoJSON();
var features_SELEKSILAYERSIG_0 = format_SELEKSILAYERSIG_0.readFeatures(json_SELEKSILAYERSIG_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SELEKSILAYERSIG_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SELEKSILAYERSIG_0.addFeatures(features_SELEKSILAYERSIG_0);var lyr_SELEKSILAYERSIG_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SELEKSILAYERSIG_0, 
                style: style_SELEKSILAYERSIG_0,
    title: 'SELEKSI LAYER SIG<br />\
    <img src="styles/legend/SELEKSILAYERSIG_0_0.png" />  18 - 40 <br />\
    <img src="styles/legend/SELEKSILAYERSIG_0_1.png" />  40 - 63 <br />\
    <img src="styles/legend/SELEKSILAYERSIG_0_2.png" />  63 - 85 <br />\
    <img src="styles/legend/SELEKSILAYERSIG_0_3.png" />  85 - 108 <br />\
    <img src="styles/legend/SELEKSILAYERSIG_0_4.png" />  108 - 130 <br />'
        });var format_PETA2_1 = new ol.format.GeoJSON();
var features_PETA2_1 = format_PETA2_1.readFeatures(json_PETA2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETA2_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PETA2_1.addFeatures(features_PETA2_1);var lyr_PETA2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETA2_1, 
                style: style_PETA2_1,
    title: 'PETA 2<br />\
    <img src="styles/legend/PETA2_1_0.png" />  1031851 - 1031854 <br />\
    <img src="styles/legend/PETA2_1_1.png" />  1031854 - 1031857 <br />\
    <img src="styles/legend/PETA2_1_2.png" />  1031857 - 1031860 <br />\
    <img src="styles/legend/PETA2_1_3.png" />  1031860 - 1031863 <br />\
    <img src="styles/legend/PETA2_1_4.png" />  1031863 - 1031866 <br />'
        });var format_PETA4_2 = new ol.format.GeoJSON();
var features_PETA4_2 = format_PETA4_2.readFeatures(json_PETA4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETA4_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PETA4_2.addFeatures(features_PETA4_2);var lyr_PETA4_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PETA4_2, 
                style: style_PETA4_2,
    title: 'PETA 4<br />\
    <img src="styles/legend/PETA4_2_0.png" />  14.0000 - 16.6000 <br />\
    <img src="styles/legend/PETA4_2_1.png" />  16.6000 - 19.2000 <br />\
    <img src="styles/legend/PETA4_2_2.png" />  19.2000 - 21.8000 <br />\
    <img src="styles/legend/PETA4_2_3.png" />  21.8000 - 24.4000 <br />\
    <img src="styles/legend/PETA4_2_4.png" />  24.4000 - 27.0000 <br />'
        });

lyr_SELEKSILAYERSIG_0.setVisible(false);lyr_PETA2_1.setVisible(false);lyr_PETA4_2.setVisible(true);
var layersList = [baseLayer,lyr_SELEKSILAYERSIG_0,lyr_PETA2_1,lyr_PETA4_2];
lyr_SELEKSILAYERSIG_0.set('fieldAliases', {'ID': 'ID', 'Kecamatan': 'Kecamatan', 'Jml.Dokter': 'Jml.Dokter', 'Jml.Bidan': 'Jml.Bidan', 'Jml.Perawt': 'Jml.Perawt', });
lyr_PETA2_1.set('fieldAliases', {'ID': 'ID', 'Kecamatan': 'Kecamatan', 'KD.Puskes': 'KD.Puskes', 'Jns.Puskes': 'Jns.Puskes', 'Alamat': 'Alamat', });
lyr_PETA4_2.set('fieldAliases', {'ID': 'ID', 'Kecamatan': 'Kecamatan', 'Jml.Desa': 'Jml.Desa', });
lyr_SELEKSILAYERSIG_0.set('fieldImages', {'ID': 'TextEdit', 'Kecamatan': 'TextEdit', 'Jml.Dokter': 'TextEdit', 'Jml.Bidan': 'TextEdit', 'Jml.Perawt': 'TextEdit', });
lyr_PETA2_1.set('fieldImages', {'ID': 'TextEdit', 'Kecamatan': 'TextEdit', 'KD.Puskes': 'TextEdit', 'Jns.Puskes': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_PETA4_2.set('fieldImages', {'ID': 'TextEdit', 'Kecamatan': 'TextEdit', 'Jml.Desa': 'TextEdit', });
lyr_SELEKSILAYERSIG_0.set('fieldLabels', {'ID': 'no label', 'Kecamatan': 'inline label', 'Jml.Dokter': 'inline label', 'Jml.Bidan': 'inline label', 'Jml.Perawt': 'inline label', });
lyr_PETA2_1.set('fieldLabels', {'ID': 'no label', 'Kecamatan': 'inline label', 'KD.Puskes': 'inline label', 'Jns.Puskes': 'inline label', 'Alamat': 'inline label', });
lyr_PETA4_2.set('fieldLabels', {'ID': 'no label', 'Kecamatan': 'inline label', 'Jml.Desa': 'inline label', });
lyr_PETA4_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});