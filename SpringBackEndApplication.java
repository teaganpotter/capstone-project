package com.claim.springbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.claim")
public class SpringBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBackEndApplication.class, args);
	}

//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (2, "4568 W Pine Blvd", "St.Louis", true, "M-F 8:30am-5:30pm", "pr@stlbsa.org", "vehicles", "38.6413", "-90.2613", "Scouting’s programs and outdoor adventures give young people the opportunity and freedom to explore a world beyond the boundaries of everyday life. It presents them with chances to try new things, provide service to others, build self-confidence and develop leadership skills.","Boy Scouts of America Greater St. Louis Area Council", "(314) 361-0600", "MO", "youth organization", "https://www.onecarhelpsscouts.com/", "63108");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (3, "445 Lindell Blvd", "St.Louis", true, "Regular Business Hours", "info@ccstl.org", "vehicles, clothing, personal hygiene items, canned food, furniture, school supplies, household goods", "38.64253", "-90.25611", "In response to the teachings of Jesus Christ, our mission is to serve people in need, especially those who are poor and vulnerable; work to improve social conditions for all people in the community; and to call members of the Church and community to do the same.", "Catholic Charities Archdiocese of St. Louis", "(314) 367-5500", "MO", "religious organization", "https://www.ccstl.org/", "63108");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (1, "2727 N Kingshighway Blvd", "St.Louis", false, "Tuesdays and Thursdays, 8 a.m. to 4 p.m. & First Saturday of the month, 9 a.m. to noon", "info@covenanthouse.org", "personal hygiene items, clothing, books, canned food", "38.6698", "-90.2571", "To protect and safeguard all youth with dignity and love and to offer the structure necessary for youth who are homeless and disconnected to pursue a life of opportunity.", "Covenant House Missouri", "(314) 533-2241", "MO", "youth organization, homeless shelter", "https://www.covenanthousemo.org/", "63113");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (4, "3830 South Grand Blvd", "St.Louis", true, "Monday-Friday 9am-5pm", "habitat@habitatstl.org", "tools, appliances, building materials, furniture, vehicles", "38.621180", "-90.238500", "Habitat for Humanity St. Louis brings people together to build homes, communities, and hope. We partner with low-income, hardworking people who are determined to create a brighter future by helping to build and then purchasing a home of their own." , "Habitat for Humanity St. Louis", "(314) 371-0400", "MO", "religious organization, low-income families", "https://www.habitatstl.org", "63118");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (5, "800 N. Tucker Blvd", "St.Louis", false, "Tuesdays and Thursdays, 8 a.m. to 4 p.m.", "kjoseph@stpatrickcenter.org ", "household goods, personal hygiene items, books, canned food, clothing", "38.6334", "-90.1956", "Living out our core values of Trust, Ownership, Collaboration and Innovation, St. Patrick Center is a hand UP, not a hand out. We don’t enable homelessness. We assist people with changing their lives.", "St. Patrick Center", "(314) 802-0700", "MO", "religious organization, homeless shelter", "www.stpatrickcenter.org", "63101");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (6, "325 North Newstead", "St.Louis", false, "Monday-Friday 8am-5pm", "ewelsh@ccstl.org", "household goods, personal hygiene items, books, clothing", "38.6440", "-90.2543", "The mission of Queen of Peace Center is to break the cycle of substance use disorders for women, children, and families thorugh family-centered behavioral healthcare. As demonstrated by the life of Jesus Christ, Queen of Peace Center works to build a future of peace for families.", "Queen of Peace Center", "(314) 531-0511", "MO", "religious organization, addiction, rehab, women and children", "qopcstl.org", "63108");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (7, "1000 North 19th St.", "St.Louis", false, "Open 24 hours", "info@gateway180.org", "canned food, clothing, personal hygiene items, toys, furniture, household goods", "38.6376", "-90.2047", "Gateway 180: Homelessness Reversed is a valuable resource for women and children experiencing the unimaginable burden of homelessness. We provide safe, nurturing emergency shelter services designed to get families into transitional or permanent homes in under 30 days.", "Gateway 180: Homelessness Reversed", "(314) 802-5444", "MO", "women and children, homeless shelter", "https://www.gateway180.org", "63103");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (8, "1201 Macklind Ave", "St.Louis", false, "Monday-Friday 10am-6pm, Saturday 10am-5pm, Sunday noon-4pm", "thenry@hsmo.org", "pet supplies", "38.6264", "-90.2765", "The Humane Society of Missouri has been dedicated to second chances. We provide a safe and caring haven to all animals in need-large and small-that have been abused, neglected or abandoned. Our mission is to end the cycle of abuse and pet overpopulation.", "Humane Society of Missouri", "(314) 951-1562", "MO", "animal shelter", "http://hsmo.org", "63110");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (9, "1727 Locust St.", "St.Louis", false, "Monday-Saturday 9am-7:45pm, Sunday 10am-5:45pm", "njordan@mersgoodwill.org", "household goods, furniture, appliances, tools, books, toys, clothing, tools", "38.6318", "-90.2051", "MERS Missouri Goodwill's mission is 'Changing lives through the power of work.'", "MERS Missouri Goodwill Industries", "(314) 241-3464", "MO", "low-income families, disabilities", "https://mersgoodwill.org", "63103");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (10, "4381 West Pine Blvd", "St.Louis", false, "Monday-Friday 9am-5pm", "fcongnata@rmhcstl.com", "personal hygiene items, canned food", "38.640209", "-90.254011", "Ronald McDonald House Charities of St. Louis providees comfort, care, and lodging to families of seriously-ill children. These children, who lives outside a 50 mile radius of St. Louis, are being treated at local area hospitals.", "Ronald McDonald House Charities of St. Louis", "(314) 773-1100", "MO", "sick children", "https://rmhcstl.com", "63108");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (11, "3010 Washington Ave", "St.Louis", true, "Monday-Friday 9am-5pm", "Kimberly_Beck@usc.salvationarmy.or", "vehicles, appliances, clothing, furniture", "38.636663", "-90.221728", "The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel of Jesus Christ and to meet human need in His name without discrimination.", "Salvation Army St. Harbor Light Center", "(314) 652-3310", "MO", "religious organization", "http://stlsalvationarmy.org", "63103");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (12, "4121 Forest Park Ave", "St.Louis", true, "Monday-Saturday 9am-5pm", " Adam_Moore@usc.salvationarmy.org", "vehicles, appliances, clothing, furniture", "38.636465", "-90.248028", "The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel of Jesus Christ and to meet human need in His name without discrimination.", "Salvation Army Midtown", "(314) 535-2000", "MO", "religious organization", "http://stlsalvationarmy.org", "63103");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (13, "1310 Papin St", "St.Louis", true, "Monday-Saturday 9am-8pm, Sunday 12pm-5pm", "ryanc@svdpstlouis.org", "vehicles, appliances, clothing, furniture, canned food, household goods", "38.619872", "-90.203352", "A network of friends, inspired by Gospel values, growing in holiness and building a more just world through personal relationships with and service to people in need.", "The Society of St. Vincent De Paul Archdiocesan Council of St. Louis", "(314) 881-6000", "MO", "religious organization", "https://svdpstlouis.org", "63103");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (14, "70 Corporate Woods Dr", "St.Louis", false, "Monday-Friday 8am-4:30pm", "rfarmer@stlfoodbank.org", "vehicles, canned food, personal hygiene items", "38.781937", "-90.459066", "The St. Louis Area Foodbank's mission is to build stronger communities by empowering people with food and hope.", "St. Louis Area Foodbank", "(314) 292-6262", "MO", "low-income families", "https://stlfoodbank.org", "63044");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (15, "1809 8th St", "St.Louis", true, "Tuesday-Thursday 9am-noon", "info@helpinghandmedowns.org", "clothing, furniture, household goods", "38.554029", "-90.478878", "Helping Hand Me Downs enhances the quality of life for children and families in the St. Louis area by meeting their immediate needs, then connecting them with life-chaning resources that foster independence.", "Helping Hand-me-downs Soulard", "(314) 514-5987", "MO", "low-income families", "http://helpinghandmedowns.org", "63104");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (17, "171 Kingston Dr", "St.Louis", false, "Monday-Friday 10am-3pm, Saturday 8:30am-noon", "info@fmpstl.org", "personal hygiene items, canned food", "38.519925", "-90.280206", "We treat each person who comes to us for help with dignity. Besides their daily needs, we try to give them hope for a brighter future, and let them know that we care and that God cares.", "Feed My People", "(314) 631-4900", "MO", "low-income families, religious organization", "https://feed-my-people.org", "63125");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (18, "1127 Vandeventer Ave", "St.Louis", false, "Monday-Thursday 9am-4pm", " hr@gasastl.org", "personal hygiene items, canned food, clothing, furniture", "38.647469", "-90.235539", "Guardian Angel has provided a hand-­up, not a hand-­out; hope, not just help for over 150 years. We walk alongside each individual and connect them to what they need -­-­ not tell them what they need to do. We ask questions about how we can support and what they want to accomplish rather than provide answers. We help people explore possibilities rather than be limited by improbabilities. Our focus is on potential, not circumstance.", "Guardian Angel Settlement Association", "(314) 231-3188", "MO", "low-income families, religious organization", "https://www.gasastl.org", "63113");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (19, "10950 Schuetz Rd", "St.Louis", false, "Monday 8:30am-5:15pm, Tuesday-Wednesday 8:30am-8:30pm, Friday 8:30am-5pm", "info@jfcs-stl.org", "personal hygiene items, canned food", "38.684347", "-90.406154", "Inspired by the Jewish tradition to make the world a better place, JF&CS helps and supports people in need to meet their challenges.", "Jewish Family & Children's Service", "(314) 993-1000", "MO", "low-income families, religious organization", "https://jfcs-stl.org", "63146");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (20, "1644 Lotsie Blvd", "St.Louis", false, "Monday-Friday 8:30am-5pm", "katie.schneider@OperationFoodSearch.org", "canned food", "38.688992", "-90.382236", "The mission of Operation Food Search is to nourish and educate our neighbors in need to heal the hurt of hunger.", "Operation Food Search", "(314) 726-5355", "MO", "low-income families", "https://www.operationfoodsearch.org", "63132");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (21, "4316 Lindell Blvd #2702", "St.Louis", false, "Monday-Friday 8am-5pm", "cmunoz@ourlittlehaven.org", "clothing", "38.640819", "-90.251398", "OUR MISSION: Our Little Haven is relentlessly committed to providing early intervention services for children and families. Our community of professional caregivers creates a safe, secure and healing environment for those impacted by abuse, neglect, and mental or behavioral health needs. We make the hurting stop, the healing begin, and the love last, one family at a time.", "Our Little Haven", "(314) 553-2229", "MO", "children, religious organization", "https://www.ourlittlehaven.org", "63108");
//	INSERT INTO donations.agency (id, address, city, do_pick_up, donation_hours, email, items_accepted, latitude, longitude, mission_statement, agency_name, phone, state, type_of_org, website, zip) VALUES (22, "1410 Howard St", "St.Louis", false, "Monday-Friday 8:30am-5pm", "website@sunshineministries.org", "personal hygiene items, canned food, clothing, school supplies, household goods", "38.643671", "-90.194553", "Sunshine Ministries is committed to providing high quality Christian social services to the poor and needy of St. Louis by offering healing from the past, help for the present, and hope for the future.", "Sunshine Ministries", "(314) 231-8209", "MO", "addiction, rehab, religious organization", "http://www.sunshineministries.org/", "63106");












}