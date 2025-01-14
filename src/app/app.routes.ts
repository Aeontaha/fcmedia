import { Routes } from "@angular/router";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { IndoorComponent } from "./pages/indoor/indoor.component";
import { OutdoorComponent } from "./pages/outdoor/outdoor.component";
import { FcMediaDeaComponent } from "./pages/data-enriched-approach/data-enriched-approach.component";
import { ProgrammatiqueComponent } from "./pages/programmatique/programmatique.component";
import { CommanderEnLigneComponent } from "./pages/commande-en-ligne/commande-en-ligne.component";
import { NotreOffreComponent } from "./pages/notre-patrimoine/notre-patrimoine.component";
import { CouvertureComponent } from "./pages/couverture/couverture.component";
import { NosServicesComponent } from "./pages/nos-services/nos-services.component";
import { AtnComponent } from "./pages/atn/atn.component";
import { FcproductionComponent } from "./pages/fcproduction/fcproduction.component";
import { RealisationsComponent } from "./pages/realisations/realisations.component";
import { NovalysComponent } from "./pages/novalys/novalys.component";
import { AquafinaComponent } from "./pages/aquafina/aquafina.component";
import { SnrtComponent } from "./pages/snrt/snrt.component";
import { BaridBankComponent } from "./pages/barid-bank/barid-bank.component";
import { CarrefourComponent } from "./pages/carrefour/carrefour.component";
import { PierreFabreComponent } from "./pages/pierre-fabre/pierre-fabre.component";
import { ArielComponent } from "./pages/ariel/ariel.component";
import { DaciaComponent } from "./pages/dacia/dacia.component";
import { QuiSommesNousComponent } from "./pages/qui-sommes-nous/qui-sommes-nous.component";
import { NosEngagementsComponent } from "./pages/nos-engagements/nos-engagements.component";
import { AcutaliteComponent } from "./pages/acutalite/acutalite.component";
import { LacementDeSiteComponent } from "./pages/lacement-de-site/lacement-de-site.component";
import { RegionDeLorientalComponent } from "./pages/region-de-loriental/region-de-loriental.component";
import { RegionDeMarrakechSafiComponent } from "./pages/region-de-marrakech-safi/region-de-marrakech-safi.component";
import { RegionDeDraaTafilaletComponent } from "./pages/region-de-draa-tafilalet/region-de-draa-tafilalet.component";
import { RegionDeFesMeknesComponent } from "./pages/region-de-fes-meknes/region-de-fes-meknes.component";
import { RegionDeGuelmimOuedNounComponent } from "./pages/region-de-guelmim-oued-noun/region-de-guelmim-oued-noun.component";
import { RegionDeTangerTetouanAlhoceimaComponent } from "./pages/region-de-tanger-tetouan-alhoceima/region-de-tanger-tetouan-alhoceima.component";
import { RegionDeSoussMassaComponent } from "./pages/region-de-souss-massa/region-de-souss-massa.component";
import { RegionDeCasablancaSettatComponent } from "./pages/region-de-casablanca-settat/region-de-casablanca-settat.component";
import { RegionDeDakhlaOuedEddahabComponent } from "./pages/region-de-dakhla-oued-eddahab/region-de-dakhla-oued-eddahab.component";
import { RegionDeBeniMellalKhenifraComponent } from "./pages/region-de-beni-mellal-khenifra/region-de-beni-mellal-khenifra.component";
import { RegionDeRabatSaleKenitraComponent } from "./pages/region-de-rabat-sale-kenitra/region-de-rabat-sale-kenitra.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { RegionDeLaayouneSakiaElhamraComponent } from "./pages/region-de-laayoune-sakia-elhamra/region-de-laayoune-sakia-elhamra.component";
import { FaqComponent } from "./pages/foire-aux-questions/foire-aux-questions.component";
import { PolitiqueDeConfidentialiteComponent } from "./pages/politique-de-confidentialite/politique-de-confidentialite.component";

export const routes: Routes = [
	{ path: "accueil", redirectTo: "", pathMatch: "full" },
	{ path: "", component: AccueilComponent },
	{ path: "indoor", component: IndoorComponent },
	{ path: "outdoor", component: OutdoorComponent },
	{ path: "data-enriched-approach", component: FcMediaDeaComponent },
	{ path: "programmatique", component: ProgrammatiqueComponent },
	{ path: "commande-en-ligne", component: CommanderEnLigneComponent },
	{ path: "notre-patrimoine", component: NotreOffreComponent },
	{ path: "couverture", component: CouvertureComponent },
	{ path: "nos-services", component: NosServicesComponent },
	{ path: "atn", component: AtnComponent },
	{ path: "fcproduction", component: FcproductionComponent },
	{ path: "realisations", component: RealisationsComponent },
	{ path: "novalys", component: NovalysComponent },
	{ path: "aquafina", component: AquafinaComponent },
	{ path: "snrt", component: SnrtComponent },
	{ path: "barid-bank", component: BaridBankComponent },
	{ path: "carrefour", component: CarrefourComponent },
	{ path: "pierre-fabre", component: PierreFabreComponent },
	{ path: "ariel", component: ArielComponent },
	{ path: "dacia", component: DaciaComponent },
	{ path: "qui-sommes-nous", component: QuiSommesNousComponent },
	{ path: "nos-engagements", component: NosEngagementsComponent },
	{ path: "actualite", component: AcutaliteComponent },
	{ path: "lacement-de-site", component: LacementDeSiteComponent },
	{ path: "region-de-loriental", component: RegionDeLorientalComponent },
	{ path: "region-de-marrakech-safi", component: RegionDeMarrakechSafiComponent },
	{ path: "region-de-draa-tafilalet", component: RegionDeDraaTafilaletComponent },
	{ path: "region-de-fes-meknes", component: RegionDeFesMeknesComponent },
	{ path: "region-de-guelmim-oued-noun", component: RegionDeGuelmimOuedNounComponent },
	{ path: "region-de-tanger-tetouan-alhoceima", component: RegionDeTangerTetouanAlhoceimaComponent },
	{ path: "region-de-souss-massa", component: RegionDeSoussMassaComponent },
	{ path: "region-de-casablanca-settat", component: RegionDeCasablancaSettatComponent },
	{ path: "region-de-dakhla-oued-eddahab", component: RegionDeDakhlaOuedEddahabComponent },
	{ path: "region-de-beni-mellal-khenifra", component: RegionDeBeniMellalKhenifraComponent },
	{ path: "region-de-rabat-sale-kenitra", component: RegionDeRabatSaleKenitraComponent },
	{ path: "region-de-laayoune-sakia-elhamra", component: RegionDeLaayouneSakiaElhamraComponent },
	{ path: "foire-aux-questions", component: FaqComponent },
	{ path: "politique-de-confidentialite", component: PolitiqueDeConfidentialiteComponent },
	{ path: "contact", component: ContactComponent },
];
