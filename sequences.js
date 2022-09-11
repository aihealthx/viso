// Dimensions of sunburst.
var width =1000;
var height = 700;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 200, h: 30, s: 1, t: 20
};

var lcolors = {
  "Cardiovascular_Abnormalities":"#5687d1",
    "Heart_Diseases":"#7b615c",
    "Vascular_Diseases":"#de783b"
};

//var colors = require('./data/color');



// Mapping of step names to colors.
var colors = {"Cardiovascular_Abnormalities": "#30f7fa", "Heart_Defects|Congenital": "#9c09a3", "22q11_Deletion_Syndrome": "#4a6835", "DiGeorge_Syndrome": "#15c9f3", "Alagille_Syndrome": "#47b90e", "Aortic_Coarctation": "#5bdeef", "Arrhythmogenic_Right_Ventricular_Dysplasia": "#a83630", "Barth_Syndrome": "#04d4d5", "Cor_Triatriatum": "#9859b5", "Coronary_Vessel_Anomalies": "#4fd95f", "Bland_White_Garland_Syndrome": "#62773d", "Myocardial_Bridging": "#dfa7a9", "Crisscross_Heart": "#af1cc9", "Dextrocardia": "#57fb26", "Kartagener_Syndrome": "#a0d74d", "Ductus_Arteriosus|Patent": "#5368be", "Ebstein_Anomaly": "#6c1cd9", "Ectopia_Cordis": "#589565", "Eisenmenger_Complex": "#7b2d1b", "Heart_Septal_Defects": "#28653c", "Aortopulmonary_Septal_Defect": "#d85b59", "Truncus_Arteriosus|Persistent": "#dbbfed", "Endocardial_Cushion_Defects": "#b30ec6", "Heart_Septal_Defects|Atrial": "#01fd98", "Foramen_Ovale|Patent": "#27c0af", "Lutembacher_Syndrome": "#20e6e3", "Heart_Septal_Defects|Ventricular": "#623e8f", "Heterotaxy_Syndrome": "#5f95bd", "Hypoplastic_Left_Heart_Syndrome": "#c10218", "Isolated_Noncompaction_of_the_Ventricular_Myocardium": "#5eab4c", "LEOPARD_Syndrome": "#9198a9", "Levocardia": "#7ebc5b", "Marfan_Syndrome": "#b69e04", "Noonan_Syndrome": "#3111b1", "Tetralogy_of_Fallot": "#01bdc9", "Transposition_of_Great_Vessels": "#e8064c", "Double_Outlet_Right_Ventricle": "#b9e939", "Tricuspid_Atresia": "#715774", "Trilogy_of_Fallot": "#e49718", "Trisomy_13_Syndrome": "#0675bd", "Trisomy_18_Syndrome": "#63af8c", "Turner_Syndrome": "#c46957", "Vascular_Malformations": "#b2cc36", "Arteriovenous_Malformations": "#130abd", "Arteriovenous_Fistula": "#851ccd", "Carotid~Cavernous_Sinus_Fistula": "#e5caa1", "Intracranial_Arteriovenous_Malformations": "#b35163", "Vein_of_Galen_Malformations": "#6ef099", "Central_Nervous_System_Vascular_Malformations": "#927328", "Central_Nervous_System_Venous_Angioma": "#cd8746", "Hemangioma|Cavernous|Central_Nervous_System": "#14030f", "Sinus_Pericranii": "#8f998e", "May~Thurner_Syndrome": "#59ce1e", "Median_Arcuate_Ligament_Syndrome": "#e77d08", "Pulmonary_Atresia": "#142ea3", "Scimitar_Syndrome": "#8c122b", "Single_Umbilical_Artery": "#bfa8cb", "Vascular_Fistula": "#8bd07b", "Arterio~Arterial_Fistula": "#02beae", "Vascular_Ring": "#757d38", "Cardiovascular_Infections": "#8b386e", "Endocarditis|Bacterial": "#8e0395", "Endocarditis|Subacute_Bacterial": "#0099b3", "Syphilis|Cardiovascular": "#e39413", "Tuberculosis|Cardiovascular": "#423474", "Pericarditis|Tuberculous": "#628772", "Heart_Diseases": "#df65f0", "Arrhythmias|Cardiac": "#eea3aa", "Arrhythmia|Sinus": "#acd952", "Sick_Sinus_Syndrome": "#ceaa2b", "Sinus_Arrest|Cardiac": "#e79020", "Atrial_Fibrillation": "#1feff6", "Atrial_Flutter": "#115619", "Bradycardia": "#072160", "Brugada_Syndrome": "#fdce65", "Cardiac_Complexes|Premature": "#497635", "Atrial_Premature_Complexes": "#9ecca9", "Ventricular_Premature_Complexes": "#47d3dd", "Commotio_Cordis": "#47043d", "Heart_Block": "#bc7771", "Adams~Stokes_Syndrome": "#8a1a9f", "Atrioventricular_Block": "#27de95", "Bundle~Branch_Block": "#1604cd", "Interatrial_Block": "#c5e3bb", "Sinoatrial_Block": "#3995fe", "Long_QT_Syndrome": "#b7e971", "Andersen_Syndrome": "#20d0a8", "Jervell~Lange_Nielsen_Syndrome": "#488734", "Romano~Ward_Syndrome": "#5344b9", "Parasystole": "#005f08", "Pre~Excitation_Syndromes": "#491e0f", "Lown~Ganong~Levine_Syndrome": "#cc3f43", "Pre~Excitation|Mahaim~Type": "#24f554", "Wolff~Parkinson~White_Syndrome": "#cc0ef9", "Tachycardia": "#20b404", "Tachycardia|Paroxysmal": "#658226", "Tachycardia|Reciprocating": "#9784db", "Tachycardia|Atrioventricular_Nodal_Reentry": "#78d8e2", "Tachycardia|Sinoatrial_Nodal_Reentry": "#4fc13f", "Tachycardia|Supraventricular": "#d92425", "Tachycardia|Ectopic_Atrial": "#6be7f3", "Tachycardia|Ectopic_Junctional": "#f05489", "Tachycardia|Sinus": "#9f31f3", "Tachycardia|Ventricular": "#052eb5", "Accelerated_Idioventricular_Rhythm": "#291bc5", "Torsades_de_Pointes": "#929e94", "Ventricular_Fibrillation": "#b9f688", "Ventricular_Flutter": "#434926", "Carcinoid_Heart_Disease": "#43b283", "Cardiac_Conduction_System_Disease": "#a3d037", "Cardiac_Output|High": "#5e2c80", "Cardiac_Output|Low": "#5b0adf", "Cardiac_Tamponade": "#a703e3", "Cardiomegaly": "#23ae55", "Cardiomyopathy|Dilated": "#cc8819", "Hypertrophy|Left_Ventricular": "#0749ce", "Hypertrophy|Right_Ventricular": "#8ad3d4", "Cardiomyopathies": "#486279", "Cardiomyopathy|Alcoholic": "#b1ff81", "Cardiomyopathy|Hypertrophic": "#40e07d", "Cardiomyopathy|Hypertrophic|Familial": "#11592e", "Cardiomyopathy|Restrictive": "#6835dd", "Chagas_Cardiomyopathy": "#1655ef", "Diabetic_Cardiomyopathies": "#551ac6", "Endocardial_Fibroelastosis": "#444bec", "Endomyocardial_Fibrosis": "#8420a6", "Glycogen_Storage_Disease_Type_IIb": "#dd591b", "Kearns~Sayre_Syndrome": "#9515f8", "Myocardial_Reperfusion_Injury": "#a97a5c", "Myocarditis": "#1a0a20", "Sarcoglycanopathies": "#c5bc52", "Endocarditis": "#5d50b6", "Endocarditis|Non~Infective": "#8c840e", "Heart_Aneurysm": "#1db6c8", "Heart_Arrest": "#154116", "Death|Sudden|Cardiac": "#863408", "Karoshi_Death": "#d79a30", "Out~of~Hospital_Cardiac_Arrest": "#97294d", "Heart_Failure": "#7f8b15", "Cardio~Renal_Syndrome": "#c24349", "Dyspnea|Paroxysmal": "#090b98", "Edema|Cardiac": "#cf56c1", "Heart_Failure|Diastolic": "#626ee4", "Heart_Failure|Systolic": "#999123", "Heart_Neoplasms": "#474cde", "Carney_Complex": "#541fa2", "Heart_Rupture": "#4ae599", "Heart_Rupture|Post~Infarction": "#4d12c8", "Ventricular_Septal_Rupture": "#4f2bf4", "Heart_Valve_Diseases": "#bcbeb0", "Aortic_Valve_Insufficiency": "#dc6a6a", "Aortic_Valve_Stenosis": "#0786b4", "Aortic_Stenosis|Subvalvular": "#1624d8", "Discrete_Subaortic_Stenosis": "#aa3537", "Aortic_Stenosis|Supravalvular": "#5307e9", "Williams_Syndrome": "#186a83", "Heart_Valve_Prolapse": "#2fc5b0", "Aortic_Valve_Prolapse": "#fc663e", "Mitral_Valve_Prolapse": "#5985ab", "Tricuspid_Valve_Prolapse": "#5d745d", "Mitral_Valve_Insufficiency": "#eb5772", "Mitral_Valve_Stenosis": "#78f72c", "Pulmonary_Valve_Insufficiency": "#e62537", "Pulmonary_Valve_Stenosis": "#075391", "Pulmonary_Subvalvular_Stenosis": "#a260e8", "Tricuspid_Valve_Insufficiency": "#529600", "Tricuspid_Valve_Stenosis": "#6c8703", "Myocardial_Ischemia": "#a2d60a", "Acute_Coronary_Syndrome": "#ebc5a1", "Angina_Pectoris": "#1c1d88", "Angina|Unstable": "#4da801", "Angina_Pectoris|Variant": "#00e44f", "Angina|Stable": "#e58f94", "Microvascular_Angina": "#ea9760", "Coronary_Disease": "#9e95a5", "Coronary_Aneurysm": "#c100a9", "Coronary_Artery_Disease": "#15ed94", "Coronary_Occlusion": "#1825bc", "Coronary_Stenosis": "#85dccd", "Coronary_Restenosis": "#6c01ee", "Coronary_Thrombosis": "#b987a0", "Coronary_Vasospasm": "#7b2f5e", "Coronary~Subclavian_Steal_Syndrome": "#12827e", "Kounis_Syndrome": "#487e90", "Myocardial_Infarction": "#61d2f2", "Anterior_Wall_Myocardial_Infarction": "#19561f", "Inferior_Wall_Myocardial_Infarction": "#f2eab1", "Non~ST_Elevated_Myocardial_Infarction": "#f4c9de", "Shock|Cardiogenic": "#5ec7eb", "ST_Elevation_Myocardial_Infarction": "#cc7af7", "Myocardial_Stunning": "#3c1ac9", "Pericardial_Effusion": "#dc4e2d", "Pericarditis": "#ef0b19", "Pericarditis|Constrictive": "#17f4df", "Pneumopericardium": "#48ca08", "Postpericardiotomy_Syndrome": "#35d909", "Pulmonary_Heart_Disease": "#d8cf9e", "Rheumatic_Heart_Disease": "#ea0117", "Ventricular_Dysfunction": "#586b93", "Ventricular_Dysfunction|Left": "#a04a43", "Takotsubo_Cardiomyopathy": "#3d027f", "Ventricular_Dysfunction|Right": "#d7b045", "Ventricular_Outflow_Obstruction": "#f52153", "Pregnancy_Complications|Cardiovascular": "#5905a1", "Embolism|Amniotic_Fluid": "#7936ed", "Vascular_Diseases": "#764d6f", "Aneurysm": "#2c81dd", "Aneurysm|Dissecting": "#1439fd", "Carotid_Artery|Internal|Dissection": "#e1fbf5", "Loeys~Dietz_Syndrome": "#9ade4a", "Vertebral_Artery_Dissection": "#830c42", "Aneurysm|False": "#068522", "Aneurysm|Infected": "#7494c9", "Aneurysm|Ruptured": "#155a5d", "Aortic_Rupture": "#183f47", "Aortic_Aneurysm": "#918d5a", "Aortic_Aneurysm|Abdominal": "#9368ae", "Aortic_Aneurysm|Thoracic": "#ac4d73", "Endoleak": "#3c46a0", "Iliac_Aneurysm": "#fea57d", "Intracranial_Aneurysm": "#79f13c", "Microaneurysm": "#9bd923", "Angiodysplasia": "#da2dee", "Gastric_Antral_Vascular_Ectasia": "#0c6b44", "Angiomatosis": "#d4c063", "Angiomatosis|Bacillary": "#22b297", "Klippel~Trenaunay~Weber_Syndrome": "#e39789", "Sturge~Weber_Syndrome": "#3263fd", "von_Hippel~Lindau_Disease": "#f04c74", "Angioedema": "#24598b", "Angioedemas|Hereditary": "#f94aff", "Hereditary_Angioedema_Type_III": "#172815", "Hereditary_Angioedema_Types_I_and_II": "#ae0fdb", "Aortic_Diseases": "#47b3fe", "Aortic_Arch_Syndromes": "#cc3b6c", "Takayasu_Arteritis": "#e9e5d2", "Aortitis": "#8b51b0", "Leriche_Syndrome": "#bbba44", "Arterial_Occlusive_Diseases": "#6b6a47", "Arteriosclerosis": "#2f9557", "Arteriolosclerosis": "#782d2b", "Arteriosclerosis_Obliterans": "#86031e", "Atherosclerosis": "#c2ba28", "Peripheral_Arterial_Disease": "#1064e8", "Intracranial_Arteriosclerosis": "#112fa3", "Dementia|Vascular": "#4cc03d", "Intermittent_Claudication": "#02e715", "Carotid_Stenosis": "#10092f", "Fibromuscular_Dysplasia": "#d2c847", "Malignant_Atrophic_Papulosis": "#f8478e", "Mesenteric_Vascular_Occlusion": "#3e512d", "Moyamoya_Disease": "#9d0d4d", "Renal_Artery_Obstruction": "#128b1c", "Retinal_Artery_Occlusion": "#122476", "Susac_Syndrome": "#a31342", "Stenosis|Pulmonary_Artery": "#18880b", "Thromboangiitis_Obliterans": "#0333eb", "Capillary_Leak_Syndrome": "#d19142", "Cerebrovascular_Disorders": "#4c63f6", "Basal_Ganglia_Cerebrovascular_Disease": "#b7e9b1", "Basal_Ganglia_Hemorrhage": "#f7a08d", "Putaminal_Hemorrhage": "#a80067", "Brain_Ischemia": "#907300", "Brain_Infarction": "#cfe320", "Brain_Stem_Infarctions": "#ea595c", "Lateral_Medullary_Syndrome": "#dee730", "Cerebral_Infarction": "#977b1e", "Dementia|Multi~Infarct": "#8828a4", "Infarction|Anterior_Cerebral_Artery": "#bf7b3c", "Infarction|Middle_Cerebral_Artery": "#770080", "Infarction|Posterior_Cerebral_Artery": "#92dce8", "Hypoxia~Ischemia|Brain": "#2bdf4e", "Ischemic_Attack|Transient": "#1d4b68", "Vertebrobasilar_Insufficiency": "#1928fa", "Subclavian_Steal_Syndrome": "#f2132d", "Carotid_Artery_Diseases": "#a53e36", "Carotid_Artery_Injuries": "#0e5658", "Carotid_Artery_Thrombosis": "#b08b85", "Cerebral_Small_Vessel_Diseases": "#86c3d6", "CADASIL": "#68c339", "Cerebral_Amyloid_Angiopathy|Familial": "#56a7ea", "Fabry_Disease": "#6883c1", "MELAS_Syndrome": "#6daed4", "Microscopic_Polyangiitis": "#9beb58", "Stroke|Lacunar": "#84a504", "Cerebrovascular_Trauma": "#2087ae", "Subarachnoid_Hemorrhage|Traumatic": "#864695", "Intracranial_Arterial_Diseases": "#fb658a", "Cerebral_Arterial_Diseases": "#c52ccd", "Cerebral_Amyloid_Angiopathy": "#962e08", "Intracranial_Embolism_and_Thrombosis": "#7d2f73", "Intracranial_Embolism": "#e78157", "Intracranial_Thrombosis": "#cf4484", "Sinus_Thrombosis|Intracranial": "#e0feca", "Cavernous_Sinus_Thrombosis": "#11b99d", "Lateral_Sinus_Thrombosis": "#5d70f6", "Sagittal_Sinus_Thrombosis": "#97e40b", "Intracranial_Hemorrhages": "#f6eec7", "Cerebral_Hemorrhage": "#5329e7", "Cerebral_Hemorrhage|Traumatic": "#dc9d70", "Cerebral_Intraventricular_Hemorrhage": "#9a3fbd", "Intracranial_Hemorrhage|Hypertensive": "#237fed", "Intracranial_Hemorrhage|Traumatic": "#b2ad1e", "Brain_Hemorrhage|Traumatic": "#7dcf1d", "Brain_Stem_Hemorrhage|Traumatic": "#dd2cf1", "Hematoma|Epidural|Cranial": "#374385", "Hematoma|Subdural": "#4b0a9c", "Hematoma|Subdural|Acute": "#c928ab", "Hematoma|Subdural|Chronic": "#cc45de", "Hematoma|Subdural|Intracranial": "#05cb09", "Pituitary_Apoplexy": "#faa358", "Subarachnoid_Hemorrhage": "#19ae34", "Leukomalacia|Periventricular": "#f9a916", "Sneddon_Syndrome": "#ed19b6", "Stroke": "#d6f916", "Vascular_Headaches": "#e254d3", "Vasculitis|Central_Nervous_System": "#fbf463", "AIDS_Arteritis|Central_Nervous_System": "#7c14b1", "Giant_Cell_Arteritis": "#de5b73", "Lupus_Vasculitis|Central_Nervous_System": "#8fa6c2", "Vasospasm|Intracranial": "#80f035", "Colitis|Ischemic": "#285996", "Compartment_Syndromes": "#5a6820", "Anterior_Compartment_Syndrome": "#19442d", "Intra~Abdominal_Hypertension": "#e287b3", "Ischemic_Contracture": "#81b5ce", "Diabetic_Angiopathies": "#a9a05f", "Diabetic_Foot": "#50e6ef", "Diabetic_Retinopathy": "#9cab59", "Embolism_and_Thrombosis": "#b6720e", "Embolism": "#0404ea", "Embolism|Air": "#771367", "Embolism|Fat": "#122286", "Embolism|Cholesterol": "#1aec7a", "Blue_Toe_Syndrome": "#2e474f", "Pulmonary_Embolism": "#b51a06", "Pulmonary_Infarction": "#369bfb", "Thromboembolism": "#66f81b", "Embolism|Paradoxical": "#d68ff9", "Venous_Thromboembolism": "#d02612", "Thrombosis": "#1820c9", "Venous_Thrombosis": "#90fb8e", "Budd~Chiari_Syndrome": "#25cc61", "Postthrombotic_Syndrome": "#29e58f", "Retinal_Vein_Occlusion": "#a6797d", "Thrombophlebitis": "#cea93a", "Lemierre_Syndrome": "#4f8723", "Upper_Extremity_Deep_Vein_Thrombosis": "#b32c37", "Hand~Arm_Vibration_Syndrome": "#616549", "Hemorrhoids": "#e22d54", "Hemostatic_Disorders": "#90e8d7", "Cryoglobulinemia": "#25d6ab", "Ehlers~Danlos_Syndrome": "#070bc3", "Hemangioma|Cavernous": "#168e77", "Multiple_Myeloma": "#c067f4", "Pseudoxanthoma_Elasticum": "#9b5789", "Purpura|Hyperglobulinemic": "#0c3cee", "Scurvy": "#6159e8", "Shwartzman_Phenomenon": "#569732", "Telangiectasia|Hereditary_Hemorrhagic": "#ce15d6", "Waldenstrom_Macroglobulinemia": "#b4da23", "Hepatic_Veno~Occlusive_Disease": "#596bbc", "Hyperemia": "#bedf5b", "Hypertension": "#40bd27", "Essential_Hypertension": "#aca5d3", "Hypertension|Malignant": "#0c84d3", "Hypertension|Pregnancy~Induced": "#5bf46a", "Hypertension|Renal": "#de3bcc", "Hypertension|Renovascular": "#1c5bbb", "Hypertensive_Retinopathy": "#b3a508", "Masked_Hypertension": "#d4399e", "White_Coat_Hypertension": "#4be6b2", "Hypotension": "#cec9eb", "Hypotension|Orthostatic": "#6b7c46", "Post~Exercise_Hypotension": "#01de0e", "Shy~Drager_Syndrome": "#381327", "Mesenteric_Ischemia": "#a4e857", "No~Reflow_Phenomenon": "#f1e1d8", "Optic_Neuropathy|Ischemic": "#a24457", "Peliosis_Hepatis": "#77ce03", "Peripheral_Vascular_Diseases": "#f1e511", "Erythromelalgia": "#a4fd2c", "Livedo_Reticularis": "#3ec6bf", "Phlebitis": "#8fe57b", "Postphlebitic_Syndrome": "#c85e38", "Raynaud_Disease": "#728e6a", "CREST_Syndrome": "#311a96", "Prehypertension": "#fdea36", "Pulmonary_Veno~Occlusive_Disease": "#794a54", "Reperfusion_Injury": "#7f2039", "Primary_Graft_Dysfunction": "#f99b36", "Spinal_Cord_Vascular_Diseases": "#2fca24", "Spinal_Cord_Ischemia": "#cd8f46", "Anterior_Spinal_Artery_Syndrome": "#38716f", "Splenic_Infarction": "#160ce6", "Stenosis|Pulmonary_Vein": "#e9bf3b", "Superior_Vena_Cava_Syndrome": "#3cc5c6", "Telangiectasis": "#cf7192", "Ataxia_Telangiectasia": "#f0378f", "Retinal_Telangiectasis": "#0da2d8", "Thoracic_Outlet_Syndrome": "#e6feb8", "Cervical_Rib_Syndrome": "#dc9305", "Varicocele": "#0ee6c3", "Varicose_Veins": "#fe2dad", "Varicose_Ulcer": "#895a13", "Vascular_Neoplasms": "#182fff", "Vascular_System_Injuries": "#8cef93", "Vasculitis": "#226906", "Arteritis": "#5639ba", "Endarteritis": "#196dbe", "Polyarteritis_Nodosa": "#4f7240", "Behcet_Syndrome": "#dcc880", "Cogan_Syndrome": "#e3f041", "Mucocutaneous_Lymph_Node_Syndrome": "#7d38bb", "Purpura|Schoenlein~Henoch": "#997634", "Retinal_Vasculitis": "#5eb916", "Systemic_Vasculitis": "#161d88", "Anti~Neutrophil_Cytoplasmic_Antibody~Associated_Vasculitis": "#52e801", "Churg~Strauss_Syndrome": "#ea2bc6", "Granulomatosis_with_Polyangiitis": "#844c1d", "Rheumatoid_Vasculitis": "#bde31d", "Vasculitis|Leukocytoclastic|Cutaneous": "#da36fd", "Vasoplegia": "#1b5e27", "Venous_Insufficiency": "#c1e1a2"};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.partition()
    .size([2 * Math.PI, radius * radius]);

var arc = d3.arc()
    .startAngle(function(d) { return d.x0; })
    .endAngle(function(d) { return d.x1; })
    .innerRadius(function(d) { return Math.sqrt(d.y0); })
    .outerRadius(function(d) { return Math.sqrt(d.y1); });

// Use d3.text and d3.csvParseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("./data/pathdata.csv", function(text) {
  var csv = d3.csvParseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // Turn the data into a d3 hierarchy and calculate the sums.
  var root = d3.hierarchy(json)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });
  
  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition(root).descendants()
      .filter(function(d) {
          return (d.x1 - d.x0 > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.data.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.datum().value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

  d3.select("#explanation")
      .style("visibility", "");

  var sequenceArray = d.ancestors().reverse();
  sequenceArray.shift(); // remove root node from the array
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .on("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var trail = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.data.name + d.depth; });

  // Remove exiting nodes.
  trail.exit().remove();

  // Add breadcrumb and label for entering nodes.
  var entering = trail.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.data.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.data.name.replace("_"," "); });

  // Merge enter and update selections; set position for all nodes.
  entering.merge(trail).attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 180, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(lcolors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(lcolors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("|");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};
