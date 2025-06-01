pg_dump: warning: there are circular foreign-key constraints on this table:
pg_dump: detail: product_category
pg_dump: hint: You might not be able to restore the dump without using --disable-triggers or temporarily dropping the constraints.
pg_dump: hint: Consider using a full dump instead of a --data-only dump to avoid this problem.
pg_dump: warning: there are circular foreign-key constraints on this table:
pg_dump: detail: tax_region
pg_dump: hint: You might not be able to restore the dump without using --disable-triggers or temporarily dropping the constraints.
pg_dump: hint: Consider using a full dump instead of a --data-only dump to avoid this problem.
pg_dump: warning: there are circular foreign-key constraints among these tables:
pg_dump: detail: order_item
pg_dump: detail: order_line_item
pg_dump: hint: You might not be able to restore the dump without using --disable-triggers or temporarily dropping the constraints.
pg_dump: hint: Consider using a full dump instead of a --data-only dump to avoid this problem.
pg_dump: warning: there are circular foreign-key constraints on this table:
pg_dump: detail: return_reason
pg_dump: hint: You might not be able to restore the dump without using --disable-triggers or temporarily dropping the constraints.
pg_dump: hint: Consider using a full dump instead of a --data-only dump to avoid this problem.
--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: account_holder; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public.account_holder DISABLE TRIGGER ALL;

COPY public.account_holder (id, provider_id, external_id, email, data, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.account_holder ENABLE TRIGGER ALL;

--
-- Data for Name: api_key; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.api_key DISABLE TRIGGER ALL;

COPY public.api_key (id, token, salt, redacted, title, type, last_used_at, created_by, created_at, revoked_by, revoked_at, updated_at, deleted_at) FROM stdin;
apk_01JW5J875C0V8M3NNYK10YTM6T	pk_bd9757fc252ecad805d4e5ce373a7d5a46e3acd167067d75e72dc1edfd36ad17		pk_bd9***d17	cURL	publishable	\N	user_01JW4PTTSGGRR82ASEKCCCN4WK	2025-05-26 05:50:05.484+00	\N	\N	2025-05-26 05:50:05.484+00	\N
\.


ALTER TABLE public.api_key ENABLE TRIGGER ALL;

--
-- Data for Name: promotion_campaign; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.promotion_campaign DISABLE TRIGGER ALL;

COPY public.promotion_campaign (id, name, description, campaign_identifier, starts_at, ends_at, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.promotion_campaign ENABLE TRIGGER ALL;

--
-- Data for Name: promotion; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.promotion DISABLE TRIGGER ALL;

COPY public.promotion (id, code, campaign_id, is_automatic, type, created_at, updated_at, deleted_at, status) FROM stdin;
\.


ALTER TABLE public.promotion ENABLE TRIGGER ALL;

--
-- Data for Name: promotion_application_method; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.promotion_application_method DISABLE TRIGGER ALL;

COPY public.promotion_application_method (id, value, raw_value, max_quantity, apply_to_quantity, buy_rules_min_quantity, type, target_type, allocation, promotion_id, created_at, updated_at, deleted_at, currency_code) FROM stdin;
\.


ALTER TABLE public.promotion_application_method ENABLE TRIGGER ALL;

--
-- Data for Name: promotion_rule; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.promotion_rule DISABLE TRIGGER ALL;

COPY public.promotion_rule (id, description, attribute, operator, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.promotion_rule ENABLE TRIGGER ALL;

--
-- Data for Name: application_method_buy_rules; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.application_method_buy_rules DISABLE TRIGGER ALL;

COPY public.application_method_buy_rules (application_method_id, promotion_rule_id) FROM stdin;
\.


ALTER TABLE public.application_method_buy_rules ENABLE TRIGGER ALL;

--
-- Data for Name: application_method_target_rules; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.application_method_target_rules DISABLE TRIGGER ALL;

COPY public.application_method_target_rules (application_method_id, promotion_rule_id) FROM stdin;
\.


ALTER TABLE public.application_method_target_rules ENABLE TRIGGER ALL;

--
-- Data for Name: auth_identity; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.auth_identity DISABLE TRIGGER ALL;

COPY public.auth_identity (id, app_metadata, created_at, updated_at, deleted_at) FROM stdin;
authid_01JW4PTTXDSBXD2G3F50GG79A7	{"user_id": "user_01JW4PTTSGGRR82ASEKCCCN4WK"}	2025-05-25 21:50:55.405+00	2025-05-25 21:50:55.423+00	\N
authid_01JW7G0MXJ5TQK5M82BW6ZNJ1M	{"user_id": "user_01JW7G0MSK7W39S8TGP43GE7MS"}	2025-05-26 23:49:29.138+00	2025-05-26 23:49:29.156+00	\N
\.


ALTER TABLE public.auth_identity ENABLE TRIGGER ALL;

--
-- Data for Name: payment_collection; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.payment_collection DISABLE TRIGGER ALL;

COPY public.payment_collection (id, currency_code, amount, raw_amount, authorized_amount, raw_authorized_amount, captured_amount, raw_captured_amount, refunded_amount, raw_refunded_amount, created_at, updated_at, deleted_at, completed_at, status, metadata) FROM stdin;
\.


ALTER TABLE public.payment_collection ENABLE TRIGGER ALL;

--
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.payment DISABLE TRIGGER ALL;

COPY public.payment (id, amount, raw_amount, currency_code, provider_id, data, created_at, updated_at, deleted_at, captured_at, canceled_at, payment_collection_id, payment_session_id, metadata) FROM stdin;
\.


ALTER TABLE public.payment ENABLE TRIGGER ALL;

--
-- Data for Name: capture; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.capture DISABLE TRIGGER ALL;

COPY public.capture (id, amount, raw_amount, payment_id, created_at, updated_at, deleted_at, created_by, metadata) FROM stdin;
\.


ALTER TABLE public.capture ENABLE TRIGGER ALL;

--
-- Data for Name: cart_address; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart_address DISABLE TRIGGER ALL;

COPY public.cart_address (id, customer_id, company, first_name, last_name, address_1, address_2, city, country_code, province, postal_code, phone, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.cart_address ENABLE TRIGGER ALL;

--
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart DISABLE TRIGGER ALL;

COPY public.cart (id, region_id, customer_id, sales_channel_id, email, currency_code, shipping_address_id, billing_address_id, metadata, created_at, updated_at, deleted_at, completed_at) FROM stdin;
\.


ALTER TABLE public.cart ENABLE TRIGGER ALL;

--
-- Data for Name: cart_line_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart_line_item DISABLE TRIGGER ALL;

COPY public.cart_line_item (id, cart_id, title, subtitle, thumbnail, quantity, variant_id, product_id, product_title, product_description, product_subtitle, product_type, product_collection, product_handle, variant_sku, variant_barcode, variant_title, variant_option_values, requires_shipping, is_discountable, is_tax_inclusive, compare_at_unit_price, raw_compare_at_unit_price, unit_price, raw_unit_price, metadata, created_at, updated_at, deleted_at, product_type_id, is_custom_price, is_giftcard) FROM stdin;
\.


ALTER TABLE public.cart_line_item ENABLE TRIGGER ALL;

--
-- Data for Name: cart_line_item_adjustment; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart_line_item_adjustment DISABLE TRIGGER ALL;

COPY public.cart_line_item_adjustment (id, description, promotion_id, code, amount, raw_amount, provider_id, metadata, created_at, updated_at, deleted_at, item_id) FROM stdin;
\.


ALTER TABLE public.cart_line_item_adjustment ENABLE TRIGGER ALL;

--
-- Data for Name: cart_line_item_tax_line; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart_line_item_tax_line DISABLE TRIGGER ALL;

COPY public.cart_line_item_tax_line (id, description, tax_rate_id, code, rate, provider_id, metadata, created_at, updated_at, deleted_at, item_id) FROM stdin;
\.


ALTER TABLE public.cart_line_item_tax_line ENABLE TRIGGER ALL;

--
-- Data for Name: cart_payment_collection; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart_payment_collection DISABLE TRIGGER ALL;

COPY public.cart_payment_collection (cart_id, payment_collection_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.cart_payment_collection ENABLE TRIGGER ALL;

--
-- Data for Name: cart_promotion; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart_promotion DISABLE TRIGGER ALL;

COPY public.cart_promotion (cart_id, promotion_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.cart_promotion ENABLE TRIGGER ALL;

--
-- Data for Name: cart_shipping_method; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart_shipping_method DISABLE TRIGGER ALL;

COPY public.cart_shipping_method (id, cart_id, name, description, amount, raw_amount, is_tax_inclusive, shipping_option_id, data, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.cart_shipping_method ENABLE TRIGGER ALL;

--
-- Data for Name: cart_shipping_method_adjustment; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart_shipping_method_adjustment DISABLE TRIGGER ALL;

COPY public.cart_shipping_method_adjustment (id, description, promotion_id, code, amount, raw_amount, provider_id, metadata, created_at, updated_at, deleted_at, shipping_method_id) FROM stdin;
\.


ALTER TABLE public.cart_shipping_method_adjustment ENABLE TRIGGER ALL;

--
-- Data for Name: cart_shipping_method_tax_line; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.cart_shipping_method_tax_line DISABLE TRIGGER ALL;

COPY public.cart_shipping_method_tax_line (id, description, tax_rate_id, code, rate, provider_id, metadata, created_at, updated_at, deleted_at, shipping_method_id) FROM stdin;
\.


ALTER TABLE public.cart_shipping_method_tax_line ENABLE TRIGGER ALL;

--
-- Data for Name: credit_line; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.credit_line DISABLE TRIGGER ALL;

COPY public.credit_line (id, cart_id, reference, reference_id, amount, raw_amount, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.credit_line ENABLE TRIGGER ALL;

--
-- Data for Name: currency; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.currency DISABLE TRIGGER ALL;

COPY public.currency (code, symbol, symbol_native, decimal_digits, rounding, raw_rounding, name, created_at, updated_at, deleted_at) FROM stdin;
usd	$	$	2	0	{"value": "0", "precision": 20}	US Dollar	2025-05-25 21:37:16.784+00	2025-05-25 21:37:16.784+00	\N
cad	CA$	$	2	0	{"value": "0", "precision": 20}	Canadian Dollar	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
eur	€	€	2	0	{"value": "0", "precision": 20}	Euro	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
aed	AED	د.إ.‏	2	0	{"value": "0", "precision": 20}	United Arab Emirates Dirham	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
afn	Af	؋	0	0	{"value": "0", "precision": 20}	Afghan Afghani	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
all	ALL	Lek	0	0	{"value": "0", "precision": 20}	Albanian Lek	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
amd	AMD	դր.	0	0	{"value": "0", "precision": 20}	Armenian Dram	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
ars	AR$	$	2	0	{"value": "0", "precision": 20}	Argentine Peso	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
aud	AU$	$	2	0	{"value": "0", "precision": 20}	Australian Dollar	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
azn	man.	ман.	2	0	{"value": "0", "precision": 20}	Azerbaijani Manat	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
bam	KM	KM	2	0	{"value": "0", "precision": 20}	Bosnia-Herzegovina Convertible Mark	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
bdt	Tk	৳	2	0	{"value": "0", "precision": 20}	Bangladeshi Taka	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
bgn	BGN	лв.	2	0	{"value": "0", "precision": 20}	Bulgarian Lev	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
bhd	BD	د.ب.‏	3	0	{"value": "0", "precision": 20}	Bahraini Dinar	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
bif	FBu	FBu	0	0	{"value": "0", "precision": 20}	Burundian Franc	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
bnd	BN$	$	2	0	{"value": "0", "precision": 20}	Brunei Dollar	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
bob	Bs	Bs	2	0	{"value": "0", "precision": 20}	Bolivian Boliviano	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
brl	R$	R$	2	0	{"value": "0", "precision": 20}	Brazilian Real	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
bwp	BWP	P	2	0	{"value": "0", "precision": 20}	Botswanan Pula	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
byn	Br	руб.	2	0	{"value": "0", "precision": 20}	Belarusian Ruble	2025-05-25 21:37:16.785+00	2025-05-25 21:37:16.785+00	\N
bzd	BZ$	$	2	0	{"value": "0", "precision": 20}	Belize Dollar	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
cdf	CDF	FrCD	2	0	{"value": "0", "precision": 20}	Congolese Franc	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
chf	CHF	CHF	2	0.05	{"value": "0.05", "precision": 20}	Swiss Franc	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
clp	CL$	$	0	0	{"value": "0", "precision": 20}	Chilean Peso	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
cny	CN¥	CN¥	2	0	{"value": "0", "precision": 20}	Chinese Yuan	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
cop	CO$	$	0	0	{"value": "0", "precision": 20}	Colombian Peso	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
crc	₡	₡	0	0	{"value": "0", "precision": 20}	Costa Rican Colón	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
cve	CV$	CV$	2	0	{"value": "0", "precision": 20}	Cape Verdean Escudo	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
czk	Kč	Kč	2	0	{"value": "0", "precision": 20}	Czech Republic Koruna	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
djf	Fdj	Fdj	0	0	{"value": "0", "precision": 20}	Djiboutian Franc	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
dkk	Dkr	kr	2	0	{"value": "0", "precision": 20}	Danish Krone	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
dop	RD$	RD$	2	0	{"value": "0", "precision": 20}	Dominican Peso	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
dzd	DA	د.ج.‏	2	0	{"value": "0", "precision": 20}	Algerian Dinar	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
eek	Ekr	kr	2	0	{"value": "0", "precision": 20}	Estonian Kroon	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
egp	EGP	ج.م.‏	2	0	{"value": "0", "precision": 20}	Egyptian Pound	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
ern	Nfk	Nfk	2	0	{"value": "0", "precision": 20}	Eritrean Nakfa	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
etb	Br	Br	2	0	{"value": "0", "precision": 20}	Ethiopian Birr	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
gbp	£	£	2	0	{"value": "0", "precision": 20}	British Pound Sterling	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
gel	GEL	GEL	2	0	{"value": "0", "precision": 20}	Georgian Lari	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
ghs	GH₵	GH₵	2	0	{"value": "0", "precision": 20}	Ghanaian Cedi	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
gnf	FG	FG	0	0	{"value": "0", "precision": 20}	Guinean Franc	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
gtq	GTQ	Q	2	0	{"value": "0", "precision": 20}	Guatemalan Quetzal	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
hkd	HK$	$	2	0	{"value": "0", "precision": 20}	Hong Kong Dollar	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
hnl	HNL	L	2	0	{"value": "0", "precision": 20}	Honduran Lempira	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
hrk	kn	kn	2	0	{"value": "0", "precision": 20}	Croatian Kuna	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
huf	Ft	Ft	0	0	{"value": "0", "precision": 20}	Hungarian Forint	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
idr	Rp	Rp	0	0	{"value": "0", "precision": 20}	Indonesian Rupiah	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
ils	₪	₪	2	0	{"value": "0", "precision": 20}	Israeli New Sheqel	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
inr	Rs	₹	2	0	{"value": "0", "precision": 20}	Indian Rupee	2025-05-25 21:37:16.786+00	2025-05-25 21:37:16.786+00	\N
iqd	IQD	د.ع.‏	0	0	{"value": "0", "precision": 20}	Iraqi Dinar	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
irr	IRR	﷼	0	0	{"value": "0", "precision": 20}	Iranian Rial	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
isk	Ikr	kr	0	0	{"value": "0", "precision": 20}	Icelandic Króna	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
jmd	J$	$	2	0	{"value": "0", "precision": 20}	Jamaican Dollar	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
jod	JD	د.أ.‏	3	0	{"value": "0", "precision": 20}	Jordanian Dinar	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
jpy	¥	￥	0	0	{"value": "0", "precision": 20}	Japanese Yen	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
kes	Ksh	Ksh	2	0	{"value": "0", "precision": 20}	Kenyan Shilling	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
khr	KHR	៛	2	0	{"value": "0", "precision": 20}	Cambodian Riel	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
kmf	CF	FC	0	0	{"value": "0", "precision": 20}	Comorian Franc	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
krw	₩	₩	0	0	{"value": "0", "precision": 20}	South Korean Won	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
kwd	KD	د.ك.‏	3	0	{"value": "0", "precision": 20}	Kuwaiti Dinar	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
kzt	KZT	тңг.	2	0	{"value": "0", "precision": 20}	Kazakhstani Tenge	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
lbp	LB£	ل.ل.‏	0	0	{"value": "0", "precision": 20}	Lebanese Pound	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
lkr	SLRs	SL Re	2	0	{"value": "0", "precision": 20}	Sri Lankan Rupee	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
ltl	Lt	Lt	2	0	{"value": "0", "precision": 20}	Lithuanian Litas	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
lvl	Ls	Ls	2	0	{"value": "0", "precision": 20}	Latvian Lats	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
lyd	LD	د.ل.‏	3	0	{"value": "0", "precision": 20}	Libyan Dinar	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mad	MAD	د.م.‏	2	0	{"value": "0", "precision": 20}	Moroccan Dirham	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mdl	MDL	MDL	2	0	{"value": "0", "precision": 20}	Moldovan Leu	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mga	MGA	MGA	0	0	{"value": "0", "precision": 20}	Malagasy Ariary	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mkd	MKD	MKD	2	0	{"value": "0", "precision": 20}	Macedonian Denar	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mmk	MMK	K	0	0	{"value": "0", "precision": 20}	Myanma Kyat	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mnt	MNT	₮	0	0	{"value": "0", "precision": 20}	Mongolian Tugrig	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mop	MOP$	MOP$	2	0	{"value": "0", "precision": 20}	Macanese Pataca	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mur	MURs	MURs	0	0	{"value": "0", "precision": 20}	Mauritian Rupee	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mxn	MX$	$	2	0	{"value": "0", "precision": 20}	Mexican Peso	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
myr	RM	RM	2	0	{"value": "0", "precision": 20}	Malaysian Ringgit	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
mzn	MTn	MTn	2	0	{"value": "0", "precision": 20}	Mozambican Metical	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
nad	N$	N$	2	0	{"value": "0", "precision": 20}	Namibian Dollar	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
ngn	₦	₦	2	0	{"value": "0", "precision": 20}	Nigerian Naira	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
nio	C$	C$	2	0	{"value": "0", "precision": 20}	Nicaraguan Córdoba	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
nok	Nkr	kr	2	0	{"value": "0", "precision": 20}	Norwegian Krone	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
npr	NPRs	नेरू	2	0	{"value": "0", "precision": 20}	Nepalese Rupee	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
nzd	NZ$	$	2	0	{"value": "0", "precision": 20}	New Zealand Dollar	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
omr	OMR	ر.ع.‏	3	0	{"value": "0", "precision": 20}	Omani Rial	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
pab	B/.	B/.	2	0	{"value": "0", "precision": 20}	Panamanian Balboa	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
pen	S/.	S/.	2	0	{"value": "0", "precision": 20}	Peruvian Nuevo Sol	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
php	₱	₱	2	0	{"value": "0", "precision": 20}	Philippine Peso	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
pkr	PKRs	₨	0	0	{"value": "0", "precision": 20}	Pakistani Rupee	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
pln	zł	zł	2	0	{"value": "0", "precision": 20}	Polish Zloty	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
pyg	₲	₲	0	0	{"value": "0", "precision": 20}	Paraguayan Guarani	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
qar	QR	ر.ق.‏	2	0	{"value": "0", "precision": 20}	Qatari Rial	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
ron	RON	RON	2	0	{"value": "0", "precision": 20}	Romanian Leu	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
rsd	din.	дин.	0	0	{"value": "0", "precision": 20}	Serbian Dinar	2025-05-25 21:37:16.787+00	2025-05-25 21:37:16.787+00	\N
rub	RUB	₽.	2	0	{"value": "0", "precision": 20}	Russian Ruble	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
rwf	RWF	FR	0	0	{"value": "0", "precision": 20}	Rwandan Franc	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
sar	SR	ر.س.‏	2	0	{"value": "0", "precision": 20}	Saudi Riyal	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
sdg	SDG	SDG	2	0	{"value": "0", "precision": 20}	Sudanese Pound	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
sek	Skr	kr	2	0	{"value": "0", "precision": 20}	Swedish Krona	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
sgd	S$	$	2	0	{"value": "0", "precision": 20}	Singapore Dollar	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
sos	Ssh	Ssh	0	0	{"value": "0", "precision": 20}	Somali Shilling	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
syp	SY£	ل.س.‏	0	0	{"value": "0", "precision": 20}	Syrian Pound	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
thb	฿	฿	2	0	{"value": "0", "precision": 20}	Thai Baht	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
tnd	DT	د.ت.‏	3	0	{"value": "0", "precision": 20}	Tunisian Dinar	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
top	T$	T$	2	0	{"value": "0", "precision": 20}	Tongan Paʻanga	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
try	₺	₺	2	0	{"value": "0", "precision": 20}	Turkish Lira	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
ttd	TT$	$	2	0	{"value": "0", "precision": 20}	Trinidad and Tobago Dollar	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
twd	NT$	NT$	2	0	{"value": "0", "precision": 20}	New Taiwan Dollar	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
tzs	TSh	TSh	0	0	{"value": "0", "precision": 20}	Tanzanian Shilling	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
uah	₴	₴	2	0	{"value": "0", "precision": 20}	Ukrainian Hryvnia	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
ugx	USh	USh	0	0	{"value": "0", "precision": 20}	Ugandan Shilling	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
uyu	$U	$	2	0	{"value": "0", "precision": 20}	Uruguayan Peso	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
uzs	UZS	UZS	0	0	{"value": "0", "precision": 20}	Uzbekistan Som	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
vef	Bs.F.	Bs.F.	2	0	{"value": "0", "precision": 20}	Venezuelan Bolívar	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
vnd	₫	₫	0	0	{"value": "0", "precision": 20}	Vietnamese Dong	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
xaf	FCFA	FCFA	0	0	{"value": "0", "precision": 20}	CFA Franc BEAC	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
xof	CFA	CFA	0	0	{"value": "0", "precision": 20}	CFA Franc BCEAO	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
yer	YR	ر.ي.‏	0	0	{"value": "0", "precision": 20}	Yemeni Rial	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
zar	R	R	2	0	{"value": "0", "precision": 20}	South African Rand	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
zmk	ZK	ZK	0	0	{"value": "0", "precision": 20}	Zambian Kwacha	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
zwl	ZWL$	ZWL$	0	0	{"value": "0", "precision": 20}	Zimbabwean Dollar	2025-05-25 21:37:16.788+00	2025-05-25 21:37:16.788+00	\N
\.


ALTER TABLE public.currency ENABLE TRIGGER ALL;

--
-- Data for Name: custom; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.custom DISABLE TRIGGER ALL;

COPY public.custom (id, custom_name, created_at, updated_at, deleted_at) FROM stdin;
01JW7MR4T6GFNR8NNNZHWDMP6P	test	2025-05-27 01:12:13.383+00	2025-05-27 01:12:13.383+00	\N
\.


ALTER TABLE public.custom ENABLE TRIGGER ALL;

--
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.customer DISABLE TRIGGER ALL;

COPY public.customer (id, company_name, first_name, last_name, email, phone, has_account, metadata, created_at, updated_at, deleted_at, created_by) FROM stdin;
cus_01JW59NE75800DWH381QW28SCB	Example company	John	Doe	john.doe@example.com	\N	f	\N	2025-05-26 03:20:01.509+00	2025-05-26 03:20:01.509+00	\N	user_01JW4PTTSGGRR82ASEKCCCN4WK
\.


ALTER TABLE public.customer ENABLE TRIGGER ALL;

--
-- Data for Name: customer_account_holder; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.customer_account_holder DISABLE TRIGGER ALL;

COPY public.customer_account_holder (customer_id, account_holder_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.customer_account_holder ENABLE TRIGGER ALL;

--
-- Data for Name: customer_address; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.customer_address DISABLE TRIGGER ALL;

COPY public.customer_address (id, customer_id, address_name, is_default_shipping, is_default_billing, company, first_name, last_name, address_1, address_2, city, country_code, province, postal_code, phone, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.customer_address ENABLE TRIGGER ALL;

--
-- Data for Name: customer_group; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.customer_group DISABLE TRIGGER ALL;

COPY public.customer_group (id, name, metadata, created_by, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.customer_group ENABLE TRIGGER ALL;

--
-- Data for Name: customer_group_customer; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.customer_group_customer DISABLE TRIGGER ALL;

COPY public.customer_group_customer (id, customer_id, customer_group_id, metadata, created_at, updated_at, created_by, deleted_at) FROM stdin;
\.


ALTER TABLE public.customer_group_customer ENABLE TRIGGER ALL;

--
-- Data for Name: fulfillment_address; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.fulfillment_address DISABLE TRIGGER ALL;

COPY public.fulfillment_address (id, company, first_name, last_name, address_1, address_2, city, country_code, province, postal_code, phone, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.fulfillment_address ENABLE TRIGGER ALL;

--
-- Data for Name: fulfillment_provider; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.fulfillment_provider DISABLE TRIGGER ALL;

COPY public.fulfillment_provider (id, is_enabled, created_at, updated_at, deleted_at) FROM stdin;
manual_manual	t	2025-05-25 21:37:16.993+00	2025-05-25 21:37:16.993+00	\N
\.


ALTER TABLE public.fulfillment_provider ENABLE TRIGGER ALL;

--
-- Data for Name: fulfillment_set; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.fulfillment_set DISABLE TRIGGER ALL;

COPY public.fulfillment_set (id, name, type, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.fulfillment_set ENABLE TRIGGER ALL;

--
-- Data for Name: service_zone; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.service_zone DISABLE TRIGGER ALL;

COPY public.service_zone (id, name, metadata, fulfillment_set_id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.service_zone ENABLE TRIGGER ALL;

--
-- Data for Name: shipping_option_type; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.shipping_option_type DISABLE TRIGGER ALL;

COPY public.shipping_option_type (id, label, description, code, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.shipping_option_type ENABLE TRIGGER ALL;

--
-- Data for Name: shipping_profile; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.shipping_profile DISABLE TRIGGER ALL;

COPY public.shipping_profile (id, name, type, metadata, created_at, updated_at, deleted_at) FROM stdin;
sp_01JW4P1WYM9YCFNQX8K9GSQTN1	Default Shipping Profile	default	\N	2025-05-25 21:37:18.294+00	2025-05-25 21:37:18.294+00	\N
\.


ALTER TABLE public.shipping_profile ENABLE TRIGGER ALL;

--
-- Data for Name: shipping_option; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.shipping_option DISABLE TRIGGER ALL;

COPY public.shipping_option (id, name, price_type, service_zone_id, shipping_profile_id, provider_id, data, metadata, shipping_option_type_id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.shipping_option ENABLE TRIGGER ALL;

--
-- Data for Name: fulfillment; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.fulfillment DISABLE TRIGGER ALL;

COPY public.fulfillment (id, location_id, packed_at, shipped_at, delivered_at, canceled_at, data, provider_id, shipping_option_id, metadata, delivery_address_id, created_at, updated_at, deleted_at, marked_shipped_by, created_by, requires_shipping) FROM stdin;
\.


ALTER TABLE public.fulfillment ENABLE TRIGGER ALL;

--
-- Data for Name: fulfillment_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.fulfillment_item DISABLE TRIGGER ALL;

COPY public.fulfillment_item (id, title, sku, barcode, quantity, raw_quantity, line_item_id, inventory_item_id, fulfillment_id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.fulfillment_item ENABLE TRIGGER ALL;

--
-- Data for Name: fulfillment_label; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.fulfillment_label DISABLE TRIGGER ALL;

COPY public.fulfillment_label (id, tracking_number, tracking_url, label_url, fulfillment_id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.fulfillment_label ENABLE TRIGGER ALL;

--
-- Data for Name: geo_zone; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.geo_zone DISABLE TRIGGER ALL;

COPY public.geo_zone (id, type, country_code, province_code, city, service_zone_id, postal_expression, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.geo_zone ENABLE TRIGGER ALL;

--
-- Data for Name: product_collection; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_collection DISABLE TRIGGER ALL;

COPY public.product_collection (id, title, handle, metadata, created_at, updated_at, deleted_at) FROM stdin;
pcol_01JWBMCT5XX0EZD5BKYBYVA12J	Popular	popular	\N	2025-05-28 14:22:59.770372+00	2025-05-28 14:22:59.770372+00	\N
\.


ALTER TABLE public.product_collection ENABLE TRIGGER ALL;

--
-- Data for Name: product_type; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_type DISABLE TRIGGER ALL;

COPY public.product_type (id, value, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.product_type ENABLE TRIGGER ALL;

--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product DISABLE TRIGGER ALL;

COPY public.product (id, title, handle, subtitle, description, is_giftcard, status, thumbnail, weight, length, height, width, origin_country, hs_code, mid_code, material, collection_id, type_id, discountable, external_id, created_at, updated_at, deleted_at, metadata) FROM stdin;
prod_01JW4RMSR3BQN5ZTGVGZEYWW97	Bottle Opener	bottle-opener	Works best with caps with 72 teeth, 26, 28 and 30mm. Other sizes available.	Older people often have trouble opening plastic bottles. Also, people with gout or other disabilities lack the strength to turn the small caps independently. The reason is the small diameter of the caps, which requires a strong grip with just two fingers.\n\nVarious helper tools exist, assisting this task by increasing the leverage. A common problem with these tools is the static design. So if the manufacturer changes the bottle cap size, they do not grip properly anymore.\n\nUpdate 2022-12-21: Updated the project and its description. Added more sizes and model formats. Added catalogue.\nHow to Print the Bottle Opener\n\nPrint the bottle opener with the handle side on the printer bed. In the file section, you will find a PrusaSlicer example project. Use this as a good base for your settings, or check the table below:\nNozzle Size:\t0.4mm\nLayer Height:\tNo limitations yet should align with the model height.\nFilament Materials:\tPETG, or ASA\nPerimeters:\tFour perimeters!\nInfill:\t30% infill.\nPrusa Slicer Profile:\t“0.2mm Quality”\n\nCap Diameter\n\nThis is the diameter of the cap in mm. If you look at the drawing, if you print a model with a given cap size, the cap will enter ⅔ of the bottle opener. The same opener will work with caps one millimetre larger or smaller.\nHas Label\n\nFor each size, there is a variant with the size of the opener on top. For the best usability, I recommend printing the models in different colours. For the blind, the engraved label can be easily read, saving unnecessary trial and error.\nCatalogue PDF\n\nIn the file section, you will find a catalogue PDF with a complete overview of all dimensions. This catalogue also contains handy tables where you can easily look up all models based on a single parameter.\n\nEach model in the catalogue is shown with an image, all parameters and the corresponding model file name. So, before you despair of finding the right model, download the catalogue and search for the model's name there.\nExplore More from Meti·kumi\n\nInterested in my designs? Browse through my collection of 3D models:\n\n👉 https://metikumi.com/3d-models/\n\nStay connected on social media for the latest updates and work-in-progress insights:\n\n👉 https://metikumi.com\nPhotos\n\nThe cover image on this project is printed on an Original Prusa i3 MK3S+, using Prusament PETG Carmine Red Transparent.\nConclusion\n\nI hope this design helped you or your relative open bottles more easily. If you found it useful, please rate it and upload photos of your prints.\n\nHappy Printing!	f	published	http://localhost:9002/public/lr2142-30-lyes-01JW520C34MD92W21MD1MVMDP6.jpg	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-25 22:22:34.762+00	2025-05-26 01:07:56.624+00	\N	\N
prod_01JW52QDWP5TMCR71KGF31TEJC	Palm Pen Holder	palm-pen-holder	A writing aid that makes it easier to grip pens and pencils.	Description\n\nThis is a customizable (parametric) 3D printable writing aid. The Palm Pen Holder makes it easier to grip a pen, pencil, or other writing utensil and may be useful for someone who has difficulty holding a pen or pencil directly. The device is able to be slid onto the hand of the user or gripped in various positions. \n\nThere are multiple sizes available for this device for both the device size and pen hole size.\n\n \nPrint Settings\n\nInfill: 20%\n\nResolution: 0.3mm\n\nSupports: No\n\nRafts: No\n \nSizing Guide\nPalm pen holder version\tPen hole size\tA (mm)\tB (mm)\tC (mm)\tD (mm)\tPen hole (mm)\nSmall Palm Pen Holder\tNarrow\t23\t21\t93\t25\t7\nStandard\t23\t21\t93\t25\t13\nWide\t23\t21\t93\t25\t18\nMedium Palm Pen Holder\tNarrow\t24\t26\t110\t35\t7\nStandard\t24\t26\t110\t35\t13\nWide\t24\t26\t110\t35\t18\nLarge Palm Pen Holder\tNarrow\t25\t33\t120\t40\t7\nStandard\t25\t33\t120\t40\t13\nWide\t25\t33\t120\t40\t18\n \nAdditional Documentation\n\nhttps://github.com/makersmakingchange/Palm-Pen-Holder\n\n \nAbout Makers Making Change\n\nMakers Making Change is an initiative of the Neil Squire Society, a Canadian non-profit that empowers people with disabilities through technology.\n\nWe leverage the capacity of community based Makers, Disability Professionals and Volunteers to develop and deliver affordable Open Source Assistive Technologies.\n\n🔸 Volunteer to print a device\n\n🔸 Tackle a design challenge\n\n🔸 Submit an assistive device idea\n\n🔸 Follow us on Instagram, Facebook, and Twitter	f	published	http://localhost:9002/public/img_4355-copy-scaled-01JW52QDVC08F5HZSSBSHEY6BK.webp	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 01:18:46.68+00	2025-05-26 01:18:46.68+00	\N	\N
prod_01JW52THWPY5GW4W1YQVK057FC	Tube Opener	tube-opener	Open tubes, lids, and more with ease!	The Tube Opener help open tubes or small lids for anyone that has difficulty gripping and twisting the caps. The tool is designed for tube caps that range from about 10–25 mm in diameter, typically 12–50 ml capacity. See it in action here!\n\nThis device can be used to open:\n\n    Toothpaste or ointment\n    Hot sauce, condiment jars, vanilla extract, apple cider vinegar\n    Paint supplies\n    Travel size products\n    Nail polish and remover\n\n \nPrint Settings\n\nInfill: 20%\n\nResolution: 0.2mm\n\nSupports: No\n\nRafts: No\n \nAttribution\n\nThis design is a remix of the Assistive Paint Tube Opener by scruss.\n\n \nAbout Makers Making Change\n\nMakers Making Change is an initiative of the Neil Squire Society, a Canadian non-profit that empowers people with disabilities through technology.\n\nWe leverage the capacity of community based Makers, Disability Professionals and Volunteers to develop and deliver affordable Open Source Assistive Technologies.\n\n🔸 Volunteer to print a device\n\n🔸 Tackle a design challenge\n\n🔸 Submit an assistive device idea\n\n🔸 Follow us on Instagram, Facebook, and Twitter	f	published	http://localhost:9002/public/tube-opener-01JW52THV6B07KC06SGWZDKW5B.webp	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 01:20:29.079+00	2025-05-26 01:50:17.521+00	\N	\N
prod_01JW52G5BF9KFWAB74DJWNBQES	DRAG | Assistive Writing and Drawing Device	drag-assistive-writing-and-drawing-device	An assistive device that enables users to write or draw without having to form a tight closed grip with their fingers.	Description\n\n*v2. 22nd February 2024 - screw holes in left and centre plates updated to clearance holes\n\n \n\nDRAG is an assistive device that enables users to write or draw without having to form a tight closed grip with their fingers. Simply rest your hand on the ergonomic mouse-shaped body, then press and DRAG. The device is suited for people with arthritis or other hand mobility issues that cause pain or discomfort when writing or drawing. Its symmetrical design also caters to the needs of both left and right-handed users.\n\n \n\n \n\nDRAG is being released as an open-source concept. Our aim is to work with individuals and disability organisations such as Makers Making Change and TechOWL, not only to share and distribute the device, but to gather feedback and make improvements over time. If you get chance to test the device, please do let us know your thoughts by emailing hello@weareprintlab.com.\n\n \n\nIn addition to the 3D print and design files, we have also developed a maker guide and step-by-step assembly instructions to make it super easy for anyone to make and use the device. These are available in the Files section. \n\n \n\nFinally, if you'd like to see the design process we took for this model, check out the video below:\n\n \n\n \n\nWe hope you enjoy the device and we look forward to your feedback.\n\n \n\n--\n\n \nAbout PrintLab\n\n \n\nPrintLab is an online learning platform dedicated to fostering creativity through 3D printing. Our mission is to go far beyond teaching people how to become operators of 3D CAD software and 3D printers. We aim to equip them with the skills to become impactful designers, capable of creating one-of-a-kind products that bring delight to themselves and the world around them.\n\n \n\nLearn more and start a free trial of PrintLab: https://weareprintlab.com/ \n\nJoin our yearly assistive technology design challenge, hosted in collaboration with Autodesk: https://www.makeablechallenge.com/	f	published	http://localhost:9002/public/drag-1-01JW52G5A1MFEJ3EY1A93QV2QF.webp	\N	\N	\N	\N	\N	\N	\N	\N	pcol_01JWBMCT5XX0EZD5BKYBYVA12J	\N	t	\N	2025-05-26 01:14:48.561+00	2025-05-28 14:23:26.14+00	\N	\N
prod_01JW52X12E60RC2E4SW32E1V7J	Key Turner	key-turner	Accessory for people with limited finger dexterity to hold keys.	The key turner is a low-cost, 3D-printed handheld tool for people with arthritis or other disabilities to operate their keys. \n\nUsers loop their finger through the hole and twist to lock and unlock doors with minimal wrist movement. The large key bed can accommodate various shape of key heads. \n \nPrint Settings\n\nInfill: 50%\n\nResolution: 0.2mm\n\nSupports: No\n\nRafts: No\n\n \nHardware Required:\n\n    1 M4 x 12mm screw (metric) / #8 - 1/2" screw (imperial)\n    1 M4 hex nut / #8 hex nut\n    2 M4 washer /#8 washer\n\n \nAbout Makers Making Change\n\nMakers Making Change is an initiative of the Neil Squire Society, a Canadian non-profit that empowers people with disabilities through technology.\n\nWe leverage the capacity of community based Makers, Disability Professionals and Volunteers to develop and deliver affordable Open Source Assistive Technologies.\n\n🔸 Volunteer to print a device\n\n🔸 Tackle a design challenge\n\n🔸 Submit an assistive device idea\n\n🔸 Follow us on Instagram, Facebook, and Twitter	f	published	http://localhost:9002/public/key-turner-1-01JW52X0ZPWP78C28FXHKCKXR0.webp	\N	\N	\N	\N	\N	\N	\N	\N	pcol_01JWBMCT5XX0EZD5BKYBYVA12J	\N	t	\N	2025-05-26 01:21:50.159+00	2025-05-28 14:23:26.14+00	\N	\N
prod_01JW53BCMSQ7XHD3XG1RVJSTE0	Writing Aid	writing-aid	A little writing aid that helps kids with disabilities to hold a pencil in the right position.	This little aid helps kids to hold a pen, pencil, or crayon better. \nThe Story\n\nIt started with a request from an occupational therapist who works at my school. She asked for something to guide the fingers of a girl when holding a colored pencil. We started with an existing design from thisables.com (https://thisables.com/de/new-developments/finger-brush/). But this design didn't fit in this case. So I went to work. \n\nI shifted the position of the pen to the side a bit and it worked way better. I also tilted the angle of the guidance for the pencil. You can see what huge of a difference this little writing aid makes now!\nThe Files\n\nThe girl in these pictures holds the pen in her left hand. I mirrored the files so that they can be used with the right hand as well. As you can flip and turn this little helper in many ways, feel free to try out what is best for you or the person you are printing this for. You can't be wrong if it works. :)\n\nLet's talk pens! They come in all sizes and colors. The girl I printed this for uses pencils with a diameter of 15mm and 16mm. It's quite common to use thicker pens with persons that need help with their fine motor skills. But what is normal in this field?! Please go ahead and modify the STEP file to your needs. I uploaded an 8mm version as well, which should fit regular pencils. \n\nIn this use case, it is intentional, that the person actively holds the pencil to write. A little wiggle room is helpful then. If you want the pencil to stay in place, you can apply a healthy amount of hot glue, or print it in an extremely tight fit. \nThe Print\n\nIt prints very easily without supports or anything fancy. You can use the standard profile and print it in 0.2mm. In the pictures, you see a print in yellow PLA from made4print. \n\nHappy printing!	f	published	http://localhost:9002/public/writing-aid-pics-merged-1-01JW53BCKZV3CVWPH5DXH2CJDN.webp	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 01:29:40.762+00	2025-05-26 01:29:40.762+00	\N	\N
prod_01JW52BRWJJPRW1WZPQASN16MX	Pen Ball	pen-ball	A writing aid that makes it easier to grip pens and pencils.	Description\n\nThis is a customizable (parametric) 3D printable writing aid. The pen ball makes it easier to grip a pen, pencil, or other writing utensil and may be useful for someone who has difficulty holding a pen or pencil directly. \n\nThe diameter of the ball and the writing utensil diameter are available in different sizing and are able to be customized further if needed. There are multiple sizes available for this device for both the device size and pen hole size.\n \nPrint Settings\n\nInfill: 20%\n\nResolution: 0.2mm\n\nSupports: No\n\nRafts: No\n \nSizing Guide\nPen ball version\tPen hole size\tBall diameter (mm)\tMaximum Pen Hole Diameter (mm)\nSmall pen ball\tNarrow\t50\t5\nStandard\t50\t10.5\nWide\t50\t12.5\nMedium pen ball\tNarrow\t60\t5\nStandard\t60\t10.5\nWide\t60\t12.5\nLarge pen ball\tNarrow\t70\t5\nStandard\t70\t10.5\nWide\t70\t12.5\n\n---\nAdditional Documentation\n\nhttps://github.com/makersmakingchange/Pen-Ball\n\n \nAbout Makers Making Change\n\nMakers Making Change is an initiative of the Neil Squire Society, a Canadian non-profit that empowers people with disabilities through technology.\n\nWe leverage the capacity of community based Makers, Disability Professionals and Volunteers to develop and deliver affordable Open Source Assistive Technologies.\n\n🔸 Volunteer to print a device\n\n🔸 Tackle a design challenge\n\n🔸 Submit an assistive device idea	f	published	http://localhost:9002/public/helen_using_pen_ball-min-01JW52BRV61BMNYF1YDV5A1WPM.jpg	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 01:12:24.724+00	2025-05-28 09:24:52.348+00	\N	\N
prod_01JW5CY968T8XV8272V1YQMZ7F	fdadsfadfs	fdadsfadfs			f	published	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	f	\N	2025-05-26 04:17:17.001+00	2025-05-26 04:35:08.316+00	2025-05-26 04:35:08.313+00	\N
prod_01JW5DZMF44N0FS5RCA8623TNX	asdfasdfasf	asdfasdfasf			f	published	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 04:35:29.894+00	2025-05-26 04:42:01.611+00	2025-05-26 04:42:01.609+00	\N
prod_01JW5EBV923VJ8AG6P50JCXKRP	asdfsadfasfd	asdfsadfasfd			f	published	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 04:42:10.083+00	2025-05-26 04:48:43.121+00	2025-05-26 04:48:43.118+00	\N
prod_01JW5ER4RT3EQY109GP0CEFXE3	asdasdf f adf asda	asdasdf-f-adf-asda			f	published	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 04:48:53.02+00	2025-05-26 04:56:42.617+00	2025-05-26 04:56:42.616+00	\N
prod_01JW5ES2VNRTGS6C1B277XH4P2	awesome	awesome			f	published	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 04:49:23.83+00	2025-05-26 04:56:44.969+00	2025-05-26 04:56:44.969+00	\N
prod_01JW5FJ7T1K9JZ75Q4NF82ZNY5	sdf sd fasdf	sdf-sd-fasdf			f	published	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 05:03:08.101+00	2025-05-26 05:18:49.221+00	2025-05-26 05:18:49.219+00	\N
prod_01JW5FX1MMC9KWQEMW6KVZZQDQ	fa sfsa	fa-sfsa			f	published	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 05:09:02.232+00	2025-05-26 05:18:51.578+00	2025-05-26 05:18:51.577+00	\N
prod_01JW5G3FV2YEGMF810B3W5Y2AD	rrrrrrrrrrrrrrrrrrrrrrrrr	rrrrrrrrrrrrrrrrrrrrrrrrr			f	published	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 05:12:33.381+00	2025-05-26 05:18:54.086+00	2025-05-26 05:18:54.086+00	\N
prod_01JW5GCPJ8WXD5QTA3N6ZF1QQS	ffffffffffffffffffffff	ffffffffffffffffffffff			f	published	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-26 05:17:35.178+00	2025-05-26 05:18:57.692+00	2025-05-26 05:18:57.691+00	\N
prod_01JW7MR4QGPJH2KGGB4VDCKS7K	Shoes	shoes	\N	\N	f	draft	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	t	\N	2025-05-27 01:12:13.3+00	2025-05-28 09:20:54.837+00	2025-05-28 09:20:54.835+00	\N
prod_01JW531B63275DNMD94HN4CHNG	Bottle Opener	bottle-opener-2	Open bottle caps and soda can tabs.	The bottle opener assists people with arthritis, limited finger dexterity or other disabilities to open standard water bottle caps (⌀ 30 mm or 1.18 in). \n\nThe device provides a large gripping surface and clamps onto the caps of standard water bottles with a small squeeze, allowing users to remove or screw on water bottle caps. It also has a narrowed feature that can be used to help open the pull tab of a can.\n\n \nPrint Settings\n\nInfill: 50%\n\nResolution: 0.2mm\n\nSupports: No\n\nRafts: No\n\n \nSizing Guide\nBottle Opener Version\tCompatible Diameter of Caps (mm)\tExample Containers\nBottle Opener 30\t28-30\t\n\n    Pop bottles of all sizes (355 mL to 2 L)\n    Bottled Water of all sizes (355 mL to 2 L)\n    Milk Carton 2 L\n    Juice Carton 2 L\n\nBottle Opener 35\t33-36\t\n\n    Juice Jug (Some brands) 1.89 L\n    Ketchup Bottle 1 L\n    Juice Carton 900 mL\n\nBottle Opener 40\t38-41\t\n\n    Sports Drink 591 mL\n    Sports Drink 950 mL\n    Juice Bottle 473 mL\n    Iced Tea Bottle 473 mL\n    Milk Bottle 473 mL\n    Milk Jug 2 L\n    Milk Jug 4 L\n    Kefir Bottle 1 L\n\nBottle Opener 45\t43-46\t\n\n    Juice Jug 1.46 L\n    Juice Jug (Some Brands) 1.89 L\n    Juice Jug 945 mL\n\nBottle Opener 50\t48-51\t\n\n    3 L Juice Jug\n\n \nAdditional Documentation\n\nhttps://github.com/makersmakingchange/Bottle-Opener\n\n \nAbout Makers Making Change\n\nMakers Making Change is an initiative of the Neil Squire Society, a Canadian non-profit that empowers people with disabilities through technology.\n\nWe leverage the capacity of community based Makers, Disability Professionals and Volunteers to develop and deliver affordable Open Source Assistive Technologies.\n\n🔸 Volunteer to print a device\n\n🔸 Tackle a design challenge\n\n🔸 Submit an assistive device idea\n\n🔸 Follow us on Instagram, Facebook, and Twitter	f	published	http://localhost:9002/public/bottle_opener_40-1-scaled-01JW531B4PMY2RFVF1S5JGTS2N.webp	\N	\N	\N	\N	\N	\N	\N	\N	pcol_01JWBMCT5XX0EZD5BKYBYVA12J	\N	t	\N	2025-05-26 01:24:11.589+00	2025-05-28 14:23:26.14+00	\N	\N
\.


ALTER TABLE public.product ENABLE TRIGGER ALL;

--
-- Data for Name: image; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.image DISABLE TRIGGER ALL;

COPY public.image (id, url, metadata, created_at, updated_at, deleted_at, rank, product_id) FROM stdin;
img_01JW523K2F2PHBXECS4XF1RE8Q	http://192.168.0.101:9002/public/lr2142-30-lyes-01JW520C34MD92W21MD1MVMDP6.jpg	\N	2025-05-26 01:07:56.624+00	2025-05-26 01:07:56.624+00	\N	0	prod_01JW4RMSR3BQN5ZTGVGZEYWW97
img_01JW523K2FK90YT4RF5P767SNC	http://192.168.0.101:9002/public/lr2142-bottle-opener-drawing-v1-01JW523JZK1F6BHZXJ1F8XVMZ4.jpg	\N	2025-05-26 01:07:56.624+00	2025-05-26 01:07:56.624+00	\N	1	prod_01JW4RMSR3BQN5ZTGVGZEYWW97
img_01JW523K2FP6GQ5Y5SPM5B8QRZ	http://192.168.0.101:9002/public/lr2142-28-lno-01JW523JZMK9S3VKGF1JFQMWEZ.jpg	\N	2025-05-26 01:07:56.624+00	2025-05-26 01:07:56.624+00	\N	2	prod_01JW4RMSR3BQN5ZTGVGZEYWW97
img_01JW523K2FYQCTR39WVBTXM46Y	http://192.168.0.101:9002/public/cover-01JW523JZND22EGE26GDR45CQ3.jpg	\N	2025-05-26 01:07:56.624+00	2025-05-26 01:07:56.624+00	\N	3	prod_01JW4RMSR3BQN5ZTGVGZEYWW97
img_01JW523K2G41R9Y5F0BQGSK8WP	http://192.168.0.101:9002/public/lr2142-28-bottle-opener-v4-01JW523JZNW9BW5QANEJWKTZBQ.jpg	\N	2025-05-26 01:07:56.624+00	2025-05-26 01:07:56.624+00	\N	4	prod_01JW4RMSR3BQN5ZTGVGZEYWW97
img_01JW54FRRVXCW28DEVFQPTFKHQ	http://192.168.0.101:9002/public/helen_using_pen_ball-min-01JW52BRV61BMNYF1YDV5A1WPM.jpg	\N	2025-05-26 01:49:32.828+00	2025-05-26 01:49:32.828+00	\N	0	prod_01JW52BRWJJPRW1WZPQASN16MX
img_01JW54FRRVYEM112F0MVZPV84K	http://192.168.0.101:9002/public/pen-ball-tools-01JW52BRV68JVBWYQZX8EN9VRX.jpg	\N	2025-05-26 01:49:32.828+00	2025-05-26 01:49:32.828+00	\N	1	prod_01JW52BRWJJPRW1WZPQASN16MX
img_01JW54FRRVP6FSF400242NB35P	http://192.168.0.101:9002/public/pen-ball-sizing_carro-01JW52BRV6MX76CA0Z10A3TM0Q.jpg	\N	2025-05-26 01:49:32.828+00	2025-05-26 01:49:32.828+00	\N	2	prod_01JW52BRWJJPRW1WZPQASN16MX
img_01JW54GCH6HRYS9SVXC9GJE4ZW	http://192.168.0.101:9002/public/drag-1-01JW52G5A1MFEJ3EY1A93QV2QF.webp	\N	2025-05-26 01:49:53.064+00	2025-05-26 01:49:53.064+00	\N	0	prod_01JW52G5BF9KFWAB74DJWNBQES
img_01JW54GCH61KEMR6J41GKFWQMK	http://192.168.0.101:9002/public/drag-2-01JW52G5A04NMQ9SS0X8GFYJTX.webp	\N	2025-05-26 01:49:53.064+00	2025-05-26 01:49:53.064+00	\N	1	prod_01JW52G5BF9KFWAB74DJWNBQES
img_01JW54GCH69704XHS4745GY6C1	http://192.168.0.101:9002/public/drag-3-01JW52G5A0ZRXGCZHSWY2E4FJB.webp	\N	2025-05-26 01:49:53.064+00	2025-05-26 01:49:53.064+00	\N	2	prod_01JW52G5BF9KFWAB74DJWNBQES
img_01JW54GCH6GB8N008FTE0VSCZ8	http://192.168.0.101:9002/public/assembly-instructions-mockup-01JW52G59Z0DRFAZ0J1DPGT7EV.webp	\N	2025-05-26 01:49:53.064+00	2025-05-26 01:49:53.064+00	\N	3	prod_01JW52G5BF9KFWAB74DJWNBQES
img_01JW54GCH7MN60T8XHAZ5NGAR8	http://192.168.0.101:9002/public/assembly-instructions-mockup-3-01JW52G59YDCZFFR14CMKGARAZ.webp	\N	2025-05-26 01:49:53.064+00	2025-05-26 01:49:53.064+00	\N	4	prod_01JW52G5BF9KFWAB74DJWNBQES
img_01JW54H4DFJZTNM27J4G9604ZG	http://192.168.0.101:9002/public/tube-opener-01JW52THV6B07KC06SGWZDKW5B.webp	\N	2025-05-26 01:50:17.52+00	2025-05-26 01:50:17.52+00	\N	0	prod_01JW52THWPY5GW4W1YQVK057FC
img_01JW54H4DG02W7KG69FPE72S5W	http://192.168.0.101:9002/public/tube-opener-3-01JW52THV7W5G63TGFXDSEWZ4A.webp	\N	2025-05-26 01:50:17.52+00	2025-05-26 01:50:17.52+00	\N	1	prod_01JW52THWPY5GW4W1YQVK057FC
img_01JW54H4DG2FENKXZMZH3W93JJ	http://192.168.0.101:9002/public/tube-opener-1-01JW52THV6ERBFF56NDBK1T0PZ.webp	\N	2025-05-26 01:50:17.52+00	2025-05-26 01:50:17.52+00	\N	2	prod_01JW52THWPY5GW4W1YQVK057FC
img_01JW54H4DGQAA8P3HNW3KAK86C	http://192.168.0.101:9002/public/tube-opener-4-01JW52THV6ZZPKTTSKAFXA8VYN.webp	\N	2025-05-26 01:50:17.52+00	2025-05-26 01:50:17.52+00	\N	3	prod_01JW52THWPY5GW4W1YQVK057FC
img_01JW54H4DGZB6WDXXZC84CQQ9H	http://192.168.0.101:9002/public/tube-opener-12-01JW52THV5N8ZJRVX5WKF2K4ER.webp	\N	2025-05-26 01:50:17.52+00	2025-05-26 01:50:17.52+00	\N	4	prod_01JW52THWPY5GW4W1YQVK057FC
img_01JW54HGPWBK2E579YTC9TGD69	http://192.168.0.101:9002/public/key-turner-1-01JW52X0ZPWP78C28FXHKCKXR0.webp	\N	2025-05-26 01:50:30.109+00	2025-05-26 01:50:30.109+00	\N	0	prod_01JW52X12E60RC2E4SW32E1V7J
img_01JW54HGPWM145JTEW95QRX30T	http://192.168.0.101:9002/public/key-turner-4-01JW52X0ZP34E47TW4ADAXHQWY.webp	\N	2025-05-26 01:50:30.109+00	2025-05-26 01:50:30.109+00	\N	1	prod_01JW52X12E60RC2E4SW32E1V7J
img_01JW54HGPWPEP69AQG5VKWH7M3	http://192.168.0.101:9002/public/key-turner-3-01JW52X0ZNDAK6YJ0YPV6XM1BX.webp	\N	2025-05-26 01:50:30.109+00	2025-05-26 01:50:30.109+00	\N	2	prod_01JW52X12E60RC2E4SW32E1V7J
img_01JW54HWZJN7X66YKZ39Q5S0YR	http://192.168.0.101:9002/public/bottle_opener_40-1-scaled-01JW531B4PMY2RFVF1S5JGTS2N.webp	\N	2025-05-26 01:50:42.675+00	2025-05-26 01:50:42.675+00	\N	0	prod_01JW531B63275DNMD94HN4CHNG
img_01JW54HWZJ0AQ14GK6YYYVAHQ0	http://192.168.0.101:9002/public/bottle_opener_35-scaled-01JW531B4PMTJTN8BZ09V720ZH.webp	\N	2025-05-26 01:50:42.675+00	2025-05-26 01:50:42.675+00	\N	1	prod_01JW531B63275DNMD94HN4CHNG
img_01JW54HWZJREXH95YEGD8DK2Y9	http://192.168.0.101:9002/public/bottle_opener_usage_2-scaled-01JW531B4NTFK3E54X4698DXEX.webp	\N	2025-05-26 01:50:42.675+00	2025-05-26 01:50:42.675+00	\N	2	prod_01JW531B63275DNMD94HN4CHNG
img_01JW54JC29KV8FXP6EET3YNR9W	http://192.168.0.101:9002/public/writing-aid-pics-merged-1-01JW53BCKZV3CVWPH5DXH2CJDN.webp	\N	2025-05-26 01:50:58.121+00	2025-05-26 01:50:58.121+00	\N	0	prod_01JW53BCMSQ7XHD3XG1RVJSTE0
img_01JW54JC291461NCWBPW7Z5VBV	http://192.168.0.101:9002/public/writing-aid-pic-2-01JW53BCKZGF046MA8AAMS7ATF.webp	\N	2025-05-26 01:50:58.121+00	2025-05-26 01:50:58.121+00	\N	1	prod_01JW53BCMSQ7XHD3XG1RVJSTE0
img_01JW54JC29ER1NFCY4PWT5A4YK	http://192.168.0.101:9002/public/wirting-aid-pic-4-01JW53BCKZ78JRV090NMTZSKEG.webp	\N	2025-05-26 01:50:58.121+00	2025-05-26 01:50:58.121+00	\N	2	prod_01JW53BCMSQ7XHD3XG1RVJSTE0
img_01JWCAPH51CMN7G32Z5XSZXQ59	http://localhost:9002/public/img_4355-copy-scaled-01JW52QDVC08F5HZSSBSHEY6BK.webp	\N	2025-05-28 20:52:46.883+00	2025-05-28 20:52:46.883+00	\N	0	prod_01JW52QDWP5TMCR71KGF31TEJC
img_01JWCAPH51MJXG0S2BZ97VHH7Q	http://192.168.0.101:9002/public/palm-pen-sizing-01JW52QDVC0WCJKT2N1AWB5H6S.webp	\N	2025-05-28 20:52:46.883+00	2025-05-28 20:52:46.883+00	\N	1	prod_01JW52QDWP5TMCR71KGF31TEJC
img_01JWCAPH52KJ58ZT3VDY4XB1WC	http://192.168.0.101:9002/public/palm-pen-in-use-scaled-01JW52QDVDBFR138VV84VDAPWD.webp	\N	2025-05-28 20:52:46.883+00	2025-05-28 20:52:46.883+00	\N	2	prod_01JW52QDWP5TMCR71KGF31TEJC
\.


ALTER TABLE public.image ENABLE TRIGGER ALL;

--
-- Data for Name: inventory_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.inventory_item DISABLE TRIGGER ALL;

COPY public.inventory_item (id, created_at, updated_at, deleted_at, sku, origin_country, hs_code, mid_code, material, weight, length, height, width, requires_shipping, description, title, thumbnail, metadata) FROM stdin;
\.


ALTER TABLE public.inventory_item ENABLE TRIGGER ALL;

--
-- Data for Name: inventory_level; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.inventory_level DISABLE TRIGGER ALL;

COPY public.inventory_level (id, created_at, updated_at, deleted_at, inventory_item_id, location_id, stocked_quantity, reserved_quantity, incoming_quantity, metadata, raw_stocked_quantity, raw_reserved_quantity, raw_incoming_quantity) FROM stdin;
\.


ALTER TABLE public.inventory_level ENABLE TRIGGER ALL;

--
-- Data for Name: invite; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.invite DISABLE TRIGGER ALL;

COPY public.invite (id, email, accepted, token, expires_at, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.invite ENABLE TRIGGER ALL;

--
-- Data for Name: link_module_migrations; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.link_module_migrations DISABLE TRIGGER ALL;

COPY public.link_module_migrations (id, table_name, link_descriptor, created_at) FROM stdin;
1	cart_payment_collection	{"toModel": "payment_collection", "toModule": "payment", "fromModel": "cart", "fromModule": "cart"}	2025-05-25 21:37:14.796291
2	cart_promotion	{"toModel": "promotions", "toModule": "promotion", "fromModel": "cart", "fromModule": "cart"}	2025-05-25 21:37:14.818395
3	location_fulfillment_provider	{"toModel": "fulfillment_provider", "toModule": "fulfillment", "fromModel": "location", "fromModule": "stock_location"}	2025-05-25 21:37:14.824022
6	order_fulfillment	{"toModel": "fulfillments", "toModule": "fulfillment", "fromModel": "order", "fromModule": "order"}	2025-05-25 21:37:14.82452
4	location_fulfillment_set	{"toModel": "fulfillment_set", "toModule": "fulfillment", "fromModel": "location", "fromModule": "stock_location"}	2025-05-25 21:37:14.824221
5	order_cart	{"toModel": "cart", "toModule": "cart", "fromModel": "order", "fromModule": "order"}	2025-05-25 21:37:14.82436
8	return_fulfillment	{"toModel": "fulfillments", "toModule": "fulfillment", "fromModel": "return", "fromModule": "order"}	2025-05-25 21:37:14.826113
7	order_promotion	{"toModel": "promotion", "toModule": "promotion", "fromModel": "order", "fromModule": "order"}	2025-05-25 21:37:14.825167
9	order_payment_collection	{"toModel": "payment_collection", "toModule": "payment", "fromModel": "order", "fromModule": "order"}	2025-05-25 21:37:14.8247
10	product_sales_channel	{"toModel": "sales_channel", "toModule": "sales_channel", "fromModel": "product", "fromModule": "product"}	2025-05-25 21:37:14.830735
12	product_variant_price_set	{"toModel": "price_set", "toModule": "pricing", "fromModel": "variant", "fromModule": "product"}	2025-05-25 21:37:14.833232
11	product_variant_inventory_item	{"toModel": "inventory", "toModule": "inventory", "fromModel": "variant", "fromModule": "product"}	2025-05-25 21:37:14.832178
13	publishable_api_key_sales_channel	{"toModel": "sales_channel", "toModule": "sales_channel", "fromModel": "api_key", "fromModule": "api_key"}	2025-05-25 21:37:14.833785
14	region_payment_provider	{"toModel": "payment_provider", "toModule": "payment", "fromModel": "region", "fromModule": "region"}	2025-05-25 21:37:14.836014
15	sales_channel_stock_location	{"toModel": "location", "toModule": "stock_location", "fromModel": "sales_channel", "fromModule": "sales_channel"}	2025-05-25 21:37:14.836286
16	shipping_option_price_set	{"toModel": "price_set", "toModule": "pricing", "fromModel": "shipping_option", "fromModule": "fulfillment"}	2025-05-25 21:37:14.83686
17	product_shipping_profile	{"toModel": "shipping_profile", "toModule": "fulfillment", "fromModel": "product", "fromModule": "product"}	2025-05-25 21:37:14.83818
18	customer_account_holder	{"toModel": "account_holder", "toModule": "payment", "fromModel": "customer", "fromModule": "customer"}	2025-05-25 21:37:14.838553
1207	product_product_hello_custom	{"toModel": "custom", "toModule": "hello", "fromModel": "product", "fromModule": "product"}	2025-05-27 00:50:11.242669
\.


ALTER TABLE public.link_module_migrations ENABLE TRIGGER ALL;

--
-- Data for Name: location_fulfillment_provider; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.location_fulfillment_provider DISABLE TRIGGER ALL;

COPY public.location_fulfillment_provider (stock_location_id, fulfillment_provider_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.location_fulfillment_provider ENABLE TRIGGER ALL;

--
-- Data for Name: location_fulfillment_set; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.location_fulfillment_set DISABLE TRIGGER ALL;

COPY public.location_fulfillment_set (stock_location_id, fulfillment_set_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.location_fulfillment_set ENABLE TRIGGER ALL;

--
-- Data for Name: mikro_orm_migrations; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.mikro_orm_migrations DISABLE TRIGGER ALL;

COPY public.mikro_orm_migrations (id, name, executed_at) FROM stdin;
1	Migration20240307161216	2025-05-25 21:37:11.918321+00
2	Migration20241210073813	2025-05-25 21:37:11.918321+00
3	Migration20250106142624	2025-05-25 21:37:11.918321+00
4	Migration20250120110820	2025-05-25 21:37:11.918321+00
5	Migration20240307132720	2025-05-25 21:37:11.992347+00
6	Migration20240719123015	2025-05-25 21:37:11.992347+00
7	Migration20241213063611	2025-05-25 21:37:11.992347+00
8	InitialSetup20240401153642	2025-05-25 21:37:12.095907+00
9	Migration20240601111544	2025-05-25 21:37:12.095907+00
10	Migration202408271511	2025-05-25 21:37:12.095907+00
11	Migration20241122120331	2025-05-25 21:37:12.095907+00
12	Migration20241125090957	2025-05-25 21:37:12.095907+00
13	Migration20250411073236	2025-05-25 21:37:12.095907+00
14	Migration20250516081326	2025-05-25 21:37:12.095907+00
15	Migration20230929122253	2025-05-25 21:37:12.29266+00
16	Migration20240322094407	2025-05-25 21:37:12.29266+00
17	Migration20240322113359	2025-05-25 21:37:12.29266+00
18	Migration20240322120125	2025-05-25 21:37:12.29266+00
19	Migration20240626133555	2025-05-25 21:37:12.29266+00
20	Migration20240704094505	2025-05-25 21:37:12.29266+00
21	Migration20241127114534	2025-05-25 21:37:12.29266+00
22	Migration20241127223829	2025-05-25 21:37:12.29266+00
23	Migration20241128055359	2025-05-25 21:37:12.29266+00
24	Migration20241212190401	2025-05-25 21:37:12.29266+00
25	Migration20250408145122	2025-05-25 21:37:12.29266+00
26	Migration20250409122219	2025-05-25 21:37:12.29266+00
27	Migration20240227120221	2025-05-25 21:37:12.490034+00
28	Migration20240617102917	2025-05-25 21:37:12.490034+00
29	Migration20240624153824	2025-05-25 21:37:12.490034+00
30	Migration20241211061114	2025-05-25 21:37:12.490034+00
31	Migration20250113094144	2025-05-25 21:37:12.490034+00
32	Migration20250120110700	2025-05-25 21:37:12.490034+00
33	Migration20250226130616	2025-05-25 21:37:12.490034+00
34	Migration20240124154000	2025-05-25 21:37:12.63638+00
35	Migration20240524123112	2025-05-25 21:37:12.63638+00
36	Migration20240602110946	2025-05-25 21:37:12.63638+00
37	Migration20241211074630	2025-05-25 21:37:12.63638+00
38	Migration20240115152146	2025-05-25 21:37:12.711813+00
39	Migration20240222170223	2025-05-25 21:37:12.753096+00
40	Migration20240831125857	2025-05-25 21:37:12.753096+00
41	Migration20241106085918	2025-05-25 21:37:12.753096+00
42	Migration20241205095237	2025-05-25 21:37:12.753096+00
43	Migration20241216183049	2025-05-25 21:37:12.753096+00
44	Migration20241218091938	2025-05-25 21:37:12.753096+00
45	Migration20250120115059	2025-05-25 21:37:12.753096+00
46	Migration20250212131240	2025-05-25 21:37:12.753096+00
47	Migration20250326151602	2025-05-25 21:37:12.753096+00
48	Migration20240205173216	2025-05-25 21:37:12.894986+00
49	Migration20240624200006	2025-05-25 21:37:12.894986+00
50	Migration20250120110744	2025-05-25 21:37:12.894986+00
51	InitialSetup20240221144943	2025-05-25 21:37:12.977323+00
52	Migration20240604080145	2025-05-25 21:37:12.977323+00
53	Migration20241205122700	2025-05-25 21:37:12.977323+00
54	InitialSetup20240227075933	2025-05-25 21:37:13.020619+00
55	Migration20240621145944	2025-05-25 21:37:13.020619+00
56	Migration20241206083313	2025-05-25 21:37:13.020619+00
57	Migration20240227090331	2025-05-25 21:37:13.071387+00
58	Migration20240710135844	2025-05-25 21:37:13.071387+00
59	Migration20240924114005	2025-05-25 21:37:13.071387+00
60	Migration20241212052837	2025-05-25 21:37:13.071387+00
61	InitialSetup20240228133303	2025-05-25 21:37:13.161849+00
62	Migration20240624082354	2025-05-25 21:37:13.161849+00
63	Migration20240225134525	2025-05-25 21:37:13.199203+00
64	Migration20240806072619	2025-05-25 21:37:13.199203+00
65	Migration20241211151053	2025-05-25 21:37:13.199203+00
66	Migration20250115160517	2025-05-25 21:37:13.199203+00
67	Migration20250120110552	2025-05-25 21:37:13.199203+00
68	Migration20250123122334	2025-05-25 21:37:13.199203+00
69	Migration20250206105639	2025-05-25 21:37:13.199203+00
70	Migration20250207132723	2025-05-25 21:37:13.199203+00
71	Migration20240219102530	2025-05-25 21:37:13.325382+00
72	Migration20240604100512	2025-05-25 21:37:13.325382+00
73	Migration20240715102100	2025-05-25 21:37:13.325382+00
74	Migration20240715174100	2025-05-25 21:37:13.325382+00
75	Migration20240716081800	2025-05-25 21:37:13.325382+00
76	Migration20240801085921	2025-05-25 21:37:13.325382+00
77	Migration20240821164505	2025-05-25 21:37:13.325382+00
78	Migration20240821170920	2025-05-25 21:37:13.325382+00
79	Migration20240827133639	2025-05-25 21:37:13.325382+00
80	Migration20240902195921	2025-05-25 21:37:13.325382+00
81	Migration20240913092514	2025-05-25 21:37:13.325382+00
82	Migration20240930122627	2025-05-25 21:37:13.325382+00
83	Migration20241014142943	2025-05-25 21:37:13.325382+00
84	Migration20241106085223	2025-05-25 21:37:13.325382+00
85	Migration20241129124827	2025-05-25 21:37:13.325382+00
86	Migration20241217162224	2025-05-25 21:37:13.325382+00
87	Migration20250326151554	2025-05-25 21:37:13.325382+00
88	Migration20240205025928	2025-05-25 21:37:13.568151+00
89	Migration20240529080336	2025-05-25 21:37:13.568151+00
90	Migration20241202100304	2025-05-25 21:37:13.568151+00
91	Migration20240214033943	2025-05-25 21:37:13.710271+00
92	Migration20240703095850	2025-05-25 21:37:13.710271+00
93	Migration20241202103352	2025-05-25 21:37:13.710271+00
94	Migration20240311145700_InitialSetupMigration	2025-05-25 21:37:13.785321+00
95	Migration20240821170957	2025-05-25 21:37:13.785321+00
96	Migration20240917161003	2025-05-25 21:37:13.785321+00
97	Migration20241217110416	2025-05-25 21:37:13.785321+00
98	Migration20250113122235	2025-05-25 21:37:13.785321+00
99	Migration20250120115002	2025-05-25 21:37:13.785321+00
100	Migration20240509083918_InitialSetupMigration	2025-05-25 21:37:13.999849+00
101	Migration20240628075401	2025-05-25 21:37:13.999849+00
102	Migration20240830094712	2025-05-25 21:37:13.999849+00
103	Migration20250120110514	2025-05-25 21:37:13.999849+00
104	Migration20231228143900	2025-05-25 21:37:14.208483+00
105	Migration20241206123341	2025-05-25 21:37:14.208483+00
106	Migration20250120111059	2025-05-25 21:37:14.208483+00
107	Migration20250128174354	2025-05-25 21:37:14.208483+00
108	Migration20250505101505	2025-05-25 21:37:14.208483+00
109	Migration20250527003556	2025-05-27 00:50:10.135954+00
\.


ALTER TABLE public.mikro_orm_migrations ENABLE TRIGGER ALL;

--
-- Data for Name: notification_provider; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.notification_provider DISABLE TRIGGER ALL;

COPY public.notification_provider (id, handle, name, is_enabled, channels, created_at, updated_at, deleted_at) FROM stdin;
resend	resend	resend	t	{email}	2025-05-26 04:34:39.329+00	2025-05-27 00:49:16.679+00	\N
local	local	local	f	{email}	2025-05-25 21:37:17.023+00	2025-05-27 00:49:16.693+00	\N
\.


ALTER TABLE public.notification_provider ENABLE TRIGGER ALL;

--
-- Data for Name: notification; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.notification DISABLE TRIGGER ALL;

COPY public.notification (id, "to", channel, template, data, trigger_type, resource_id, resource_type, receiver_id, original_notification_id, idempotency_key, external_id, provider_id, created_at, updated_at, deleted_at, status) FROM stdin;
noti_01JW5CY9AM1QZH7CSQDWFF4QSR	krystian@ogonowski.it	email	product-created	{"id": "prod_01JW5CY968T8XV8272V1YQMZ7F"}	\N	\N	\N	\N	\N	\N	\N	local	2025-05-26 04:17:17.141+00	2025-05-26 04:17:17.152+00	\N	success
noti_01JW5DZMK9J4SJTGCYR8Y4GZYC	krystian@ogonowski.it	email	product-created	{"id": "prod_01JW5DZMF44N0FS5RCA8623TNX"}	\N	\N	\N	\N	\N	\N	\N	resend	2025-05-26 04:35:30.025+00	2025-05-26 04:35:30.034+00	\N	success
noti_01JW5EBVDFZQP85CE6ATC8GMTX	krystian@ogonowski.it	email	product-created	{"id": "prod_01JW5EBV923VJ8AG6P50JCXKRP"}	\N	\N	\N	\N	\N	\N	\N	resend	2025-05-26 04:42:10.223+00	2025-05-26 04:42:10.236+00	\N	success
noti_01JW5ER4X3Y9Y7DHFCC6C9SV4H	krystian@ogonowski.it	email	product-created	{"id": "prod_01JW5ER4RT3EQY109GP0CEFXE3"}	\N	\N	\N	\N	\N	\N	\N	resend	2025-05-26 04:48:53.155+00	2025-05-26 04:48:53.271+00	\N	failure
noti_01JW5ES30JD5WQ72SJ3V0T42SE	krystian@ogonowski.it	email	product-created	{"id": "prod_01JW5ES2VNRTGS6C1B277XH4P2"}	\N	\N	\N	\N	\N	\N	\N	resend	2025-05-26 04:49:23.986+00	2025-05-26 04:49:23.999+00	\N	failure
noti_01JW5FJ7Y7TW26AK3E077924QG	krystian@ogonowski.it	email	product-created	{"id": "prod_01JW5FJ7T1K9JZ75Q4NF82ZNY5"}	\N	\N	\N	\N	\N	\N	\N	resend	2025-05-26 05:03:08.232+00	2025-05-26 05:03:08.352+00	\N	failure
noti_01JW5FX1S02ZS6YZH2FRFP67TM	krystian@ogonowski.it	email	product-created	{"id": "prod_01JW5FX1MMC9KWQEMW6KVZZQDQ"}	\N	\N	\N	\N	\N	\N	\N	resend	2025-05-26 05:09:02.368+00	2025-05-26 05:09:02.505+00	\N	failure
noti_01JW5G3G256D0Z6Z4Q66QEA0TN	krystian@ogonowski.it	email	product-created	{"id": "prod_01JW5G3FV2YEGMF810B3W5Y2AD"}	\N	\N	\N	\N	\N	\N	\N	resend	2025-05-26 05:12:33.605+00	2025-05-26 05:12:33.719+00	\N	failure
noti_01JW5GCPQCSZ81AMG4H2QJSWMX	krystian@ogonowski.it	email	product-created	{"product": {"id": "prod_01JW5GCPJ8WXD5QTA3N6ZF1QQS", "type": null, "title": "ffffffffffffffffffffff", "width": null, "handle": "ffffffffffffffffffffff", "height": null, "length": null, "status": "published", "weight": null, "hs_code": null, "type_id": null, "material": null, "metadata": null, "mid_code": null, "subtitle": "", "thumbnail": null, "collection": null, "created_at": "2025-05-26T05:17:35.178Z", "deleted_at": null, "updated_at": "2025-05-26T05:17:35.178Z", "description": "", "external_id": null, "is_giftcard": false, "discountable": true, "collection_id": null, "origin_country": null}}	\N	\N	\N	\N	\N	\N	a3cad79b-1398-4ade-89d1-5683cc95336b	resend	2025-05-26 05:17:35.341+00	2025-05-26 05:17:36.706+00	\N	success
noti_01JW7MR4W0VY2QN5AZD1WGJAKQ	krystian@ogonowski.it	email	product-created	{"product": {"id": "prod_01JW7MR4QGPJH2KGGB4VDCKS7K", "type": null, "title": "Shoes", "width": null, "handle": "shoes", "height": null, "length": null, "status": "draft", "weight": null, "hs_code": null, "type_id": null, "material": null, "metadata": null, "mid_code": null, "subtitle": null, "thumbnail": null, "collection": null, "created_at": "2025-05-27T01:12:13.300Z", "deleted_at": null, "updated_at": "2025-05-27T01:12:13.300Z", "description": null, "external_id": null, "is_giftcard": false, "discountable": true, "collection_id": null, "origin_country": null}}	\N	\N	\N	\N	\N	\N	26ce3634-6c52-4efa-bba8-1b8495a38b5d	resend	2025-05-27 01:12:13.441+00	2025-05-27 01:12:15.084+00	\N	success
\.


ALTER TABLE public.notification ENABLE TRIGGER ALL;

--
-- Data for Name: order_address; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_address DISABLE TRIGGER ALL;

COPY public.order_address (id, customer_id, company, first_name, last_name, address_1, address_2, city, country_code, province, postal_code, phone, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_address ENABLE TRIGGER ALL;

--
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public."order" DISABLE TRIGGER ALL;

COPY public."order" (id, region_id, display_id, customer_id, version, sales_channel_id, status, is_draft_order, email, currency_code, shipping_address_id, billing_address_id, no_notification, metadata, created_at, updated_at, deleted_at, canceled_at) FROM stdin;
\.


ALTER TABLE public."order" ENABLE TRIGGER ALL;

--
-- Data for Name: order_cart; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_cart DISABLE TRIGGER ALL;

COPY public.order_cart (order_id, cart_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_cart ENABLE TRIGGER ALL;

--
-- Data for Name: order_change; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_change DISABLE TRIGGER ALL;

COPY public.order_change (id, order_id, version, description, status, internal_note, created_by, requested_by, requested_at, confirmed_by, confirmed_at, declined_by, declined_reason, metadata, declined_at, canceled_by, canceled_at, created_at, updated_at, change_type, deleted_at, return_id, claim_id, exchange_id) FROM stdin;
\.


ALTER TABLE public.order_change ENABLE TRIGGER ALL;

--
-- Data for Name: order_change_action; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_change_action DISABLE TRIGGER ALL;

COPY public.order_change_action (id, order_id, version, ordering, order_change_id, reference, reference_id, action, details, amount, raw_amount, internal_note, applied, created_at, updated_at, deleted_at, return_id, claim_id, exchange_id) FROM stdin;
\.


ALTER TABLE public.order_change_action ENABLE TRIGGER ALL;

--
-- Data for Name: order_claim; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_claim DISABLE TRIGGER ALL;

COPY public.order_claim (id, order_id, return_id, order_version, display_id, type, no_notification, refund_amount, raw_refund_amount, metadata, created_at, updated_at, deleted_at, canceled_at, created_by) FROM stdin;
\.


ALTER TABLE public.order_claim ENABLE TRIGGER ALL;

--
-- Data for Name: order_claim_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_claim_item DISABLE TRIGGER ALL;

COPY public.order_claim_item (id, claim_id, item_id, is_additional_item, reason, quantity, raw_quantity, note, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_claim_item ENABLE TRIGGER ALL;

--
-- Data for Name: order_claim_item_image; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_claim_item_image DISABLE TRIGGER ALL;

COPY public.order_claim_item_image (id, claim_item_id, url, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_claim_item_image ENABLE TRIGGER ALL;

--
-- Data for Name: order_credit_line; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_credit_line DISABLE TRIGGER ALL;

COPY public.order_credit_line (id, order_id, reference, reference_id, amount, raw_amount, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_credit_line ENABLE TRIGGER ALL;

--
-- Data for Name: order_exchange; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_exchange DISABLE TRIGGER ALL;

COPY public.order_exchange (id, order_id, return_id, order_version, display_id, no_notification, allow_backorder, difference_due, raw_difference_due, metadata, created_at, updated_at, deleted_at, canceled_at, created_by) FROM stdin;
\.


ALTER TABLE public.order_exchange ENABLE TRIGGER ALL;

--
-- Data for Name: order_exchange_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_exchange_item DISABLE TRIGGER ALL;

COPY public.order_exchange_item (id, exchange_id, item_id, quantity, raw_quantity, note, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_exchange_item ENABLE TRIGGER ALL;

--
-- Data for Name: order_fulfillment; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_fulfillment DISABLE TRIGGER ALL;

COPY public.order_fulfillment (order_id, fulfillment_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_fulfillment ENABLE TRIGGER ALL;

--
-- Data for Name: order_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_item DISABLE TRIGGER ALL;

COPY public.order_item (id, order_id, version, item_id, quantity, raw_quantity, fulfilled_quantity, raw_fulfilled_quantity, shipped_quantity, raw_shipped_quantity, return_requested_quantity, raw_return_requested_quantity, return_received_quantity, raw_return_received_quantity, return_dismissed_quantity, raw_return_dismissed_quantity, written_off_quantity, raw_written_off_quantity, metadata, created_at, updated_at, deleted_at, delivered_quantity, raw_delivered_quantity, unit_price, raw_unit_price, compare_at_unit_price, raw_compare_at_unit_price) FROM stdin;
\.


ALTER TABLE public.order_item ENABLE TRIGGER ALL;

--
-- Data for Name: order_line_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_line_item DISABLE TRIGGER ALL;

COPY public.order_line_item (id, totals_id, title, subtitle, thumbnail, variant_id, product_id, product_title, product_description, product_subtitle, product_type, product_collection, product_handle, variant_sku, variant_barcode, variant_title, variant_option_values, requires_shipping, is_discountable, is_tax_inclusive, compare_at_unit_price, raw_compare_at_unit_price, unit_price, raw_unit_price, metadata, created_at, updated_at, deleted_at, is_custom_price, product_type_id, is_giftcard) FROM stdin;
\.


ALTER TABLE public.order_line_item ENABLE TRIGGER ALL;

--
-- Data for Name: order_line_item_adjustment; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_line_item_adjustment DISABLE TRIGGER ALL;

COPY public.order_line_item_adjustment (id, description, promotion_id, code, amount, raw_amount, provider_id, created_at, updated_at, item_id, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_line_item_adjustment ENABLE TRIGGER ALL;

--
-- Data for Name: order_line_item_tax_line; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_line_item_tax_line DISABLE TRIGGER ALL;

COPY public.order_line_item_tax_line (id, description, tax_rate_id, code, rate, raw_rate, provider_id, created_at, updated_at, item_id, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_line_item_tax_line ENABLE TRIGGER ALL;

--
-- Data for Name: order_payment_collection; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_payment_collection DISABLE TRIGGER ALL;

COPY public.order_payment_collection (order_id, payment_collection_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_payment_collection ENABLE TRIGGER ALL;

--
-- Data for Name: order_promotion; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_promotion DISABLE TRIGGER ALL;

COPY public.order_promotion (order_id, promotion_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_promotion ENABLE TRIGGER ALL;

--
-- Data for Name: order_shipping; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_shipping DISABLE TRIGGER ALL;

COPY public.order_shipping (id, order_id, version, shipping_method_id, created_at, updated_at, deleted_at, return_id, claim_id, exchange_id) FROM stdin;
\.


ALTER TABLE public.order_shipping ENABLE TRIGGER ALL;

--
-- Data for Name: order_shipping_method; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_shipping_method DISABLE TRIGGER ALL;

COPY public.order_shipping_method (id, name, description, amount, raw_amount, is_tax_inclusive, shipping_option_id, data, metadata, created_at, updated_at, deleted_at, is_custom_amount) FROM stdin;
\.


ALTER TABLE public.order_shipping_method ENABLE TRIGGER ALL;

--
-- Data for Name: order_shipping_method_adjustment; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_shipping_method_adjustment DISABLE TRIGGER ALL;

COPY public.order_shipping_method_adjustment (id, description, promotion_id, code, amount, raw_amount, provider_id, created_at, updated_at, shipping_method_id, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_shipping_method_adjustment ENABLE TRIGGER ALL;

--
-- Data for Name: order_shipping_method_tax_line; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_shipping_method_tax_line DISABLE TRIGGER ALL;

COPY public.order_shipping_method_tax_line (id, description, tax_rate_id, code, rate, raw_rate, provider_id, created_at, updated_at, shipping_method_id, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_shipping_method_tax_line ENABLE TRIGGER ALL;

--
-- Data for Name: order_summary; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_summary DISABLE TRIGGER ALL;

COPY public.order_summary (id, order_id, version, totals, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.order_summary ENABLE TRIGGER ALL;

--
-- Data for Name: order_transaction; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.order_transaction DISABLE TRIGGER ALL;

COPY public.order_transaction (id, order_id, version, amount, raw_amount, currency_code, reference, reference_id, created_at, updated_at, deleted_at, return_id, claim_id, exchange_id) FROM stdin;
\.


ALTER TABLE public.order_transaction ENABLE TRIGGER ALL;

--
-- Data for Name: payment_provider; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.payment_provider DISABLE TRIGGER ALL;

COPY public.payment_provider (id, is_enabled, created_at, updated_at, deleted_at) FROM stdin;
pp_system_default	t	2025-05-25 21:37:16.832+00	2025-05-25 21:37:16.832+00	\N
pp_stripe-przelewy24_stripe	t	2025-05-26 02:43:06.017+00	2025-05-26 02:43:06.017+00	\N
pp_stripe_stripe	t	2025-05-26 02:43:06.017+00	2025-05-26 02:43:06.017+00	\N
pp_stripe-ideal_stripe	t	2025-05-26 02:43:06.017+00	2025-05-26 02:43:06.017+00	\N
pp_stripe-giropay_stripe	t	2025-05-26 02:43:06.017+00	2025-05-26 02:43:06.017+00	\N
pp_stripe-blik_stripe	t	2025-05-26 02:43:06.017+00	2025-05-26 02:43:06.017+00	\N
pp_stripe-bancontact_stripe	t	2025-05-26 02:43:06.017+00	2025-05-26 02:43:06.017+00	\N
\.


ALTER TABLE public.payment_provider ENABLE TRIGGER ALL;

--
-- Data for Name: payment_collection_payment_providers; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.payment_collection_payment_providers DISABLE TRIGGER ALL;

COPY public.payment_collection_payment_providers (payment_collection_id, payment_provider_id) FROM stdin;
\.


ALTER TABLE public.payment_collection_payment_providers ENABLE TRIGGER ALL;

--
-- Data for Name: payment_session; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.payment_session DISABLE TRIGGER ALL;

COPY public.payment_session (id, currency_code, amount, raw_amount, provider_id, data, context, status, authorized_at, payment_collection_id, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.payment_session ENABLE TRIGGER ALL;

--
-- Data for Name: price_list; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.price_list DISABLE TRIGGER ALL;

COPY public.price_list (id, status, starts_at, ends_at, rules_count, title, description, type, created_at, updated_at, deleted_at) FROM stdin;
plist_01JW54PNT2801K7PA4H67N40PB	active	2025-06-01 07:00:00+00	2025-06-14 16:00:00+00	0	FIRST_20	100% off for first 20 people	sale	2025-05-26 01:53:19.171+00	2025-05-26 01:53:19.171+00	\N
\.


ALTER TABLE public.price_list ENABLE TRIGGER ALL;

--
-- Data for Name: price_set; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.price_set DISABLE TRIGGER ALL;

COPY public.price_set (id, created_at, updated_at, deleted_at) FROM stdin;
pset_01JW4RMSW0Y78Y67SN0ET6KQ44	2025-05-25 22:22:34.882+00	2025-05-25 22:22:34.882+00	\N
pset_01JW4RMSW1RM1M6ST0GBG8F43G	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW1NYT3NGBPT3AXQWT9	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW1YET6DFXHVYKXR6SD	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW17KZ64CHNCK7TPW4Q	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW1C57PMJQ4KJ4P95T3	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW17SQZJYN7E80KD421	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW1Z0KDCX8ADGXFJXMT	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW1MBSWF7VYX67P6AG5	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW1FPE3YJ7T50S6EPJH	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW2V755EAJXKCTJ9XX6	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW2DJCKW92VQWCSK6K8	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW2QE31PNZMFGWAHK4T	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW256TWA73E309EJCWW	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW2SAQYBHM22CF74SAW	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW2P39EQZTQNSAYF225	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW26D7RN7195W79B8ER	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW4RMSW2CC6G73HS4WKJE0K5	2025-05-25 22:22:34.883+00	2025-05-25 22:22:34.883+00	\N
pset_01JW52BRZ5W5P1C1742RCD2C65	2025-05-26 01:12:24.806+00	2025-05-26 01:12:24.806+00	\N
pset_01JW52BRZ593567EW22EBGXCG6	2025-05-26 01:12:24.806+00	2025-05-26 01:12:24.806+00	\N
pset_01JW52BRZ5WYXG2NH22MGQ26FB	2025-05-26 01:12:24.806+00	2025-05-26 01:12:24.806+00	\N
pset_01JW52BRZ5WN6B1KBPZN0V28PE	2025-05-26 01:12:24.806+00	2025-05-26 01:12:24.806+00	\N
pset_01JW52BRZ5S0HK1Q7Z1A9RA7H4	2025-05-26 01:12:24.806+00	2025-05-26 01:12:24.806+00	\N
pset_01JW52BRZ5ASPSZ0PYTC77NPE0	2025-05-26 01:12:24.806+00	2025-05-26 01:12:24.806+00	\N
pset_01JW52BRZ5EAD5ZQ0TTFGMV3EZ	2025-05-26 01:12:24.806+00	2025-05-26 01:12:24.806+00	\N
pset_01JW52BRZ5H4GEK1SEN90EKCW7	2025-05-26 01:12:24.806+00	2025-05-26 01:12:24.806+00	\N
pset_01JW52BRZ52BTVEDQTKNAVNNK3	2025-05-26 01:12:24.806+00	2025-05-26 01:12:24.806+00	\N
pset_01JW52G5DJZ2TMSKB3SWQWPZF1	2025-05-26 01:14:48.626+00	2025-05-26 01:14:48.626+00	\N
pset_01JW52QDZ73GJQQ8NZRTAWNSCP	2025-05-26 01:18:46.759+00	2025-05-26 01:18:46.759+00	\N
pset_01JW52QDZ7HRA69SCWDKWHF1SP	2025-05-26 01:18:46.759+00	2025-05-26 01:18:46.759+00	\N
pset_01JW52QDZ791Q2T5RXQAWGVJZE	2025-05-26 01:18:46.759+00	2025-05-26 01:18:46.759+00	\N
pset_01JW52QDZ7X3NQHYZGRTKX4VWR	2025-05-26 01:18:46.759+00	2025-05-26 01:18:46.759+00	\N
pset_01JW52QDZ7H0TZF2Y24ST1C9AN	2025-05-26 01:18:46.76+00	2025-05-26 01:18:46.76+00	\N
pset_01JW52QDZ73P4H335Q7EJ02XXQ	2025-05-26 01:18:46.76+00	2025-05-26 01:18:46.76+00	\N
pset_01JW52QDZ7VS7CTFM6BJZGG62K	2025-05-26 01:18:46.76+00	2025-05-26 01:18:46.76+00	\N
pset_01JW52QDZ7EJHXZ4E18Z4Z32KY	2025-05-26 01:18:46.76+00	2025-05-26 01:18:46.76+00	\N
pset_01JW52QDZ739X6786MQWBAZ5Z0	2025-05-26 01:18:46.76+00	2025-05-26 01:18:46.76+00	\N
pset_01JW52THY44YMRDP3T5S7J1VXS	2025-05-26 01:20:29.124+00	2025-05-26 01:20:29.124+00	\N
pset_01JW52X13XH11PVVB42NTQX3N4	2025-05-26 01:21:50.205+00	2025-05-26 01:21:50.205+00	\N
pset_01JW531B7TD96VSCGT2AY96JWQ	2025-05-26 01:24:11.642+00	2025-05-26 01:24:11.642+00	\N
pset_01JW53BCP5EWS47GABA24RT00S	2025-05-26 01:29:40.805+00	2025-05-26 01:29:40.805+00	\N
pset_01JW53BCP5DBPXJ9CXQW4MM4GY	2025-05-26 01:29:40.805+00	2025-05-26 01:29:40.805+00	\N
pset_01JW5CY98JXE5KPGP75ETWE89W	2025-05-26 04:17:17.075+00	2025-05-26 04:35:08.341+00	2025-05-26 04:35:08.34+00
pset_01JW5DZMHHYMSNVHSNNK22JYWF	2025-05-26 04:35:29.969+00	2025-05-26 04:42:01.64+00	2025-05-26 04:42:01.639+00
pset_01JW5EBVBZVV2VF64PGQ896GCV	2025-05-26 04:42:10.175+00	2025-05-26 04:48:43.15+00	2025-05-26 04:48:43.149+00
pset_01JW5ER4VDZVTNHJ1BBDK095F9	2025-05-26 04:48:53.102+00	2025-05-26 04:56:42.65+00	2025-05-26 04:56:42.649+00
pset_01JW5ES2Z11F2NK02M9TNR0R0F	2025-05-26 04:49:23.938+00	2025-05-26 04:56:45.03+00	2025-05-26 04:56:45.03+00
pset_01JW5FJ7WBNAN35YKSKX47ASRB	2025-05-26 05:03:08.171+00	2025-05-26 05:18:49.258+00	2025-05-26 05:18:49.258+00
pset_01JW5FX1QDBCB9P6472VQH2P7D	2025-05-26 05:09:02.317+00	2025-05-26 05:18:51.621+00	2025-05-26 05:18:51.621+00
pset_01JW5G3G0FKSTB3DZ8P1TGTVAN	2025-05-26 05:12:33.552+00	2025-05-26 05:18:54.111+00	2025-05-26 05:18:54.111+00
pset_01JW5GCPN9ZS6AS039G74BTHHY	2025-05-26 05:17:35.274+00	2025-05-26 05:18:57.714+00	2025-05-26 05:18:57.714+00
\.


ALTER TABLE public.price_set ENABLE TRIGGER ALL;

--
-- Data for Name: price; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.price DISABLE TRIGGER ALL;

COPY public.price (id, title, price_set_id, currency_code, raw_amount, rules_count, created_at, updated_at, deleted_at, price_list_id, amount, min_quantity, max_quantity) FROM stdin;
price_01JW54SA2V0RCHMZ6JGRKAGT16	\N	pset_01JW4RMSW1RM1M6ST0GBG8F43G	pln	{"value": "0", "precision": 20}	0	2025-05-26 01:54:45.466108+00	2025-05-26 01:54:45.466108+00	\N	plist_01JW54PNT2801K7PA4H67N40PB	0	\N	\N
price_01JW54SA2VMX1PTDZBB1NZ8MBF	\N	pset_01JW53BCP5DBPXJ9CXQW4MM4GY	pln	{"value": "0", "precision": 20}	0	2025-05-26 01:54:45.466108+00	2025-05-26 01:54:45.466108+00	\N	plist_01JW54PNT2801K7PA4H67N40PB	0	\N	\N
price_01JW54TA4TH5VBBS969G1EJ8V6	\N	pset_01JW52BRZ5WYXG2NH22MGQ26FB	pln	{"value": "0", "precision": 20}	0	2025-05-26 01:55:18.297362+00	2025-05-26 01:55:18.297362+00	\N	plist_01JW54PNT2801K7PA4H67N40PB	0	\N	\N
price_01JW54TA4T0CTKYWE85DPVFXV1	\N	pset_01JW52G5DJZ2TMSKB3SWQWPZF1	pln	{"value": "0", "precision": 20}	0	2025-05-26 01:55:18.297362+00	2025-05-26 01:55:18.297362+00	\N	plist_01JW54PNT2801K7PA4H67N40PB	0	\N	\N
price_01JW54TA4T0PEVPXZ49435KBJY	\N	pset_01JW52QDZ73GJQQ8NZRTAWNSCP	pln	{"value": "0", "precision": 20}	0	2025-05-26 01:55:18.297362+00	2025-05-26 01:55:18.297362+00	\N	plist_01JW54PNT2801K7PA4H67N40PB	0	\N	\N
price_01JW54TA4TJN3456A1K575Z9AQ	\N	pset_01JW52THY44YMRDP3T5S7J1VXS	pln	{"value": "0", "precision": 20}	0	2025-05-26 01:55:18.297362+00	2025-05-26 01:55:18.297362+00	\N	plist_01JW54PNT2801K7PA4H67N40PB	0	\N	\N
price_01JW54TA4TF6QNGHAVMBVR1555	\N	pset_01JW52X13XH11PVVB42NTQX3N4	pln	{"value": "0", "precision": 20}	0	2025-05-26 01:55:18.297362+00	2025-05-26 01:55:18.297362+00	\N	plist_01JW54PNT2801K7PA4H67N40PB	0	\N	\N
price_01JW54TA4TCMQWC3VJB3ZPEARD	\N	pset_01JW531B7TD96VSCGT2AY96JWQ	pln	{"value": "0", "precision": 20}	0	2025-05-26 01:55:18.297362+00	2025-05-26 01:55:18.297362+00	\N	plist_01JW54PNT2801K7PA4H67N40PB	0	\N	\N
\.


ALTER TABLE public.price ENABLE TRIGGER ALL;

--
-- Data for Name: price_list_rule; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.price_list_rule DISABLE TRIGGER ALL;

COPY public.price_list_rule (id, price_list_id, created_at, updated_at, deleted_at, value, attribute) FROM stdin;
\.


ALTER TABLE public.price_list_rule ENABLE TRIGGER ALL;

--
-- Data for Name: price_preference; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.price_preference DISABLE TRIGGER ALL;

COPY public.price_preference (id, attribute, value, is_tax_inclusive, created_at, updated_at, deleted_at) FROM stdin;
prpref_01JW4P8MKAWVV3F32K5WETZX29	currency_code	eur	f	2025-05-25 21:40:59.114+00	2025-05-25 21:40:59.114+00	\N
prpref_01JW4Q18K6EFGNXFRQCNYVGHQK	region_id	reg_01JW4Q18JBJG1A7QSB8V53GQMW	t	2025-05-25 21:54:26.023+00	2025-05-25 21:54:26.023+00	\N
prpref_01JW4Q3WJQ6C0A6F2SH72MB2DE	currency_code	pln	f	2025-05-25 21:55:52.023+00	2025-05-25 21:55:52.023+00	\N
\.


ALTER TABLE public.price_preference ENABLE TRIGGER ALL;

--
-- Data for Name: price_rule; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.price_rule DISABLE TRIGGER ALL;

COPY public.price_rule (id, value, priority, price_id, created_at, updated_at, deleted_at, attribute, operator) FROM stdin;
\.


ALTER TABLE public.price_rule ENABLE TRIGGER ALL;

--
-- Data for Name: product_category; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_category DISABLE TRIGGER ALL;

COPY public.product_category (id, name, description, handle, mpath, is_active, is_internal, rank, parent_category_id, created_at, updated_at, deleted_at, metadata) FROM stdin;
pcat_01JW548Y5J8M32F0435RK36PQF	Mobility		mobility	pcat_01JW548Y5J8M32F0435RK36PQF	t	f	1	\N	2025-05-26 01:45:48.978+00	2025-05-26 01:45:48.978+00	\N	\N
pcat_01JW54DFGKB8XJSEDWDG45XQS9	Daily-Living Helpers		daily-living-helpers	pcat_01JW54DFGKB8XJSEDWDG45XQS9	t	f	2	\N	2025-05-26 01:48:17.811+00	2025-05-26 01:48:17.811+00	\N	\N
pcat_01JW5482YXAMCXA371ASF9YKNN	Writing & Desk Aids		writing-and-desk-aids	pcat_01JW5482YXAMCXA371ASF9YKNN	t	f	0	\N	2025-05-26 01:45:21.118+00	2025-05-26 03:19:22.019+00	\N	\N
\.


ALTER TABLE public.product_category ENABLE TRIGGER ALL;

--
-- Data for Name: product_category_product; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_category_product DISABLE TRIGGER ALL;

COPY public.product_category_product (product_id, product_category_id) FROM stdin;
prod_01JW52BRWJJPRW1WZPQASN16MX	pcat_01JW5482YXAMCXA371ASF9YKNN
prod_01JW52G5BF9KFWAB74DJWNBQES	pcat_01JW5482YXAMCXA371ASF9YKNN
prod_01JW52QDWP5TMCR71KGF31TEJC	pcat_01JW5482YXAMCXA371ASF9YKNN
prod_01JW53BCMSQ7XHD3XG1RVJSTE0	pcat_01JW5482YXAMCXA371ASF9YKNN
prod_01JW4RMSR3BQN5ZTGVGZEYWW97	pcat_01JW54DFGKB8XJSEDWDG45XQS9
prod_01JW52THWPY5GW4W1YQVK057FC	pcat_01JW54DFGKB8XJSEDWDG45XQS9
prod_01JW52X12E60RC2E4SW32E1V7J	pcat_01JW54DFGKB8XJSEDWDG45XQS9
prod_01JW531B63275DNMD94HN4CHNG	pcat_01JW54DFGKB8XJSEDWDG45XQS9
\.


ALTER TABLE public.product_category_product ENABLE TRIGGER ALL;

--
-- Data for Name: product_option; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_option DISABLE TRIGGER ALL;

COPY public.product_option (id, title, product_id, metadata, created_at, updated_at, deleted_at) FROM stdin;
opt_01JW4RMSR74EK6JDQWE00KPMA3	Label text	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	\N	2025-05-25 22:22:34.763+00	2025-05-25 22:22:34.763+00	\N
opt_01JW4RMSR9J22JCB8SG4WYWMYJ	Cap diameter	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
opt_01JW52BRWK7Q0B7NHY6S16NQ6V	Device size	prod_01JW52BRWJJPRW1WZPQASN16MX	\N	2025-05-26 01:12:24.724+00	2025-05-26 01:12:24.724+00	\N
opt_01JW52BRWM7QMQZBKKDM7EN15J	Pen Hole Size	prod_01JW52BRWJJPRW1WZPQASN16MX	\N	2025-05-26 01:12:24.724+00	2025-05-26 01:12:24.724+00	\N
opt_01JW52G5BG0XR3PMDSDQ06JJXT	Default option	prod_01JW52G5BF9KFWAB74DJWNBQES	\N	2025-05-26 01:14:48.562+00	2025-05-26 01:14:48.562+00	\N
opt_01JW52QDWPCJ872WAKWPB8J09A	Palm size	prod_01JW52QDWP5TMCR71KGF31TEJC	\N	2025-05-26 01:18:46.68+00	2025-05-26 01:18:46.68+00	\N
opt_01JW52QDWQRSXKR3P6VB68XD5F	Pen hole size	prod_01JW52QDWP5TMCR71KGF31TEJC	\N	2025-05-26 01:18:46.68+00	2025-05-26 01:18:46.68+00	\N
opt_01JW52THWP0AYRCTTBHDBZ0QDK	Default option	prod_01JW52THWPY5GW4W1YQVK057FC	\N	2025-05-26 01:20:29.08+00	2025-05-26 01:20:29.08+00	\N
opt_01JW52X12FTC6RM2CZF4HAPAG0	Default option	prod_01JW52X12E60RC2E4SW32E1V7J	\N	2025-05-26 01:21:50.159+00	2025-05-26 01:21:50.159+00	\N
opt_01JW531B64C64MJ791ZFWQZK8T	Default option	prod_01JW531B63275DNMD94HN4CHNG	\N	2025-05-26 01:24:11.589+00	2025-05-26 01:24:11.589+00	\N
opt_01JW53BCMTSSN580MDB217G0W5	Hand	prod_01JW53BCMSQ7XHD3XG1RVJSTE0	\N	2025-05-26 01:29:40.762+00	2025-05-26 01:29:40.762+00	\N
opt_01JW5CY968TZAN6GXQVQVK3TDE	Default option	prod_01JW5CY968T8XV8272V1YQMZ7F	\N	2025-05-26 04:17:17.001+00	2025-05-26 04:35:08.332+00	2025-05-26 04:35:08.313+00
opt_01JW5DZMF55EPJZN4KB0YT2MA5	Default option	prod_01JW5DZMF44N0FS5RCA8623TNX	\N	2025-05-26 04:35:29.894+00	2025-05-26 04:42:01.621+00	2025-05-26 04:42:01.609+00
opt_01JW5EBV92MDW9P6A4T4AG9CCX	Default option	prod_01JW5EBV923VJ8AG6P50JCXKRP	\N	2025-05-26 04:42:10.083+00	2025-05-26 04:48:43.135+00	2025-05-26 04:48:43.118+00
opt_01JW5ER4RWSV7Q4AD4G27Y6C81	Default option	prod_01JW5ER4RT3EQY109GP0CEFXE3	\N	2025-05-26 04:48:53.021+00	2025-05-26 04:56:42.627+00	2025-05-26 04:56:42.616+00
opt_01JW5ES2VPSTZG7AYG962Z1SNW	Default option	prod_01JW5ES2VNRTGS6C1B277XH4P2	\N	2025-05-26 04:49:23.831+00	2025-05-26 04:56:44.98+00	2025-05-26 04:56:44.969+00
opt_01JW5FJ7T4RR2AM47AZVZ3W835	Default option	prod_01JW5FJ7T1K9JZ75Q4NF82ZNY5	\N	2025-05-26 05:03:08.102+00	2025-05-26 05:18:49.234+00	2025-05-26 05:18:49.219+00
opt_01JW5FX1MQEPXZ0XDP4XESHQKY	Default option	prod_01JW5FX1MMC9KWQEMW6KVZZQDQ	\N	2025-05-26 05:09:02.232+00	2025-05-26 05:18:51.592+00	2025-05-26 05:18:51.577+00
opt_01JW5G3FV4FFZ4YM5ENPMVF07A	Default option	prod_01JW5G3FV2YEGMF810B3W5Y2AD	\N	2025-05-26 05:12:33.382+00	2025-05-26 05:18:54.093+00	2025-05-26 05:18:54.086+00
opt_01JW5GCPJAHS1JN6CKQEBXV754	Default option	prod_01JW5GCPJ8WXD5QTA3N6ZF1QQS	\N	2025-05-26 05:17:35.179+00	2025-05-26 05:18:57.697+00	2025-05-26 05:18:57.691+00
opt_01JW7MR4QKDQK0NY31XWF8K6WR	Default option	prod_01JW7MR4QGPJH2KGGB4VDCKS7K	\N	2025-05-27 01:12:13.3+00	2025-05-28 09:20:54.857+00	2025-05-28 09:20:54.835+00
\.


ALTER TABLE public.product_option ENABLE TRIGGER ALL;

--
-- Data for Name: product_option_value; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_option_value DISABLE TRIGGER ALL;

COPY public.product_option_value (id, value, option_id, metadata, created_at, updated_at, deleted_at) FROM stdin;
optval_01JW4RMSR7E2695HW04TY0DSYV	Yes	opt_01JW4RMSR74EK6JDQWE00KPMA3	\N	2025-05-25 22:22:34.763+00	2025-05-25 22:22:34.763+00	\N
optval_01JW4RMSR7B1T397KRP4VP966V	No	opt_01JW4RMSR74EK6JDQWE00KPMA3	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW4RMSR8N4D4P2S341ZV3NYH	24	opt_01JW4RMSR9J22JCB8SG4WYWMYJ	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW4RMSR8HRQK1J81R6ZHRA55	25	opt_01JW4RMSR9J22JCB8SG4WYWMYJ	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW4RMSR8W60ASCHP9BSM052Y	26	opt_01JW4RMSR9J22JCB8SG4WYWMYJ	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW4RMSR8774PV7SWAGJ59JRH	27	opt_01JW4RMSR9J22JCB8SG4WYWMYJ	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW4RMSR888EHRWJXB5103331	28	opt_01JW4RMSR9J22JCB8SG4WYWMYJ	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW4RMSR9C3NDDSWFF23TV9GV	29	opt_01JW4RMSR9J22JCB8SG4WYWMYJ	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW4RMSR9E493AH0KX3REXFDR	30	opt_01JW4RMSR9J22JCB8SG4WYWMYJ	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW4RMSR9KAF0V4E4WRXEPEY0	31	opt_01JW4RMSR9J22JCB8SG4WYWMYJ	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW4RMSR9MS3QP9CJZS07D8C6	32	opt_01JW4RMSR9J22JCB8SG4WYWMYJ	\N	2025-05-25 22:22:34.764+00	2025-05-25 22:22:34.764+00	\N
optval_01JW52BRWKAPDJXN9TG40NYKXS	Small	opt_01JW52BRWK7Q0B7NHY6S16NQ6V	\N	2025-05-26 01:12:24.724+00	2025-05-26 01:12:24.724+00	\N
optval_01JW52BRWKHF127Y4JYJ550KX4	Medium	opt_01JW52BRWK7Q0B7NHY6S16NQ6V	\N	2025-05-26 01:12:24.724+00	2025-05-26 01:12:24.724+00	\N
optval_01JW52BRWK36TPY88X3J2VBXD3	Large	opt_01JW52BRWK7Q0B7NHY6S16NQ6V	\N	2025-05-26 01:12:24.724+00	2025-05-26 01:12:24.724+00	\N
optval_01JW52BRWK6ZJMH7JC81KFM7M9	Narrow	opt_01JW52BRWM7QMQZBKKDM7EN15J	\N	2025-05-26 01:12:24.725+00	2025-05-26 01:12:24.725+00	\N
optval_01JW52BRWKEF9TSAPP2ZEV6CSJ	Standard	opt_01JW52BRWM7QMQZBKKDM7EN15J	\N	2025-05-26 01:12:24.725+00	2025-05-26 01:12:24.725+00	\N
optval_01JW52BRWKR71WQS6E6W3K8KZF	Wide	opt_01JW52BRWM7QMQZBKKDM7EN15J	\N	2025-05-26 01:12:24.725+00	2025-05-26 01:12:24.725+00	\N
optval_01JW52G5BG7KJJ5R5MTD8XCKWE	Default option value	opt_01JW52G5BG0XR3PMDSDQ06JJXT	\N	2025-05-26 01:14:48.562+00	2025-05-26 01:14:48.562+00	\N
optval_01JW52QDWPE11RS1P6MXZCMGQH	Small	opt_01JW52QDWPCJ872WAKWPB8J09A	\N	2025-05-26 01:18:46.68+00	2025-05-26 01:18:46.68+00	\N
optval_01JW52QDWPRB2MFDA6K8SJN9YA	Medium	opt_01JW52QDWPCJ872WAKWPB8J09A	\N	2025-05-26 01:18:46.68+00	2025-05-26 01:18:46.68+00	\N
optval_01JW52QDWPQ9ZDGYYVHD05G36G	Large	opt_01JW52QDWPCJ872WAKWPB8J09A	\N	2025-05-26 01:18:46.68+00	2025-05-26 01:18:46.68+00	\N
optval_01JW52QDWQR909PTARFBGRYZK8	Small	opt_01JW52QDWQRSXKR3P6VB68XD5F	\N	2025-05-26 01:18:46.68+00	2025-05-26 01:18:46.68+00	\N
optval_01JW52QDWQYEGFFSXXF7Y1NKEC	Medium	opt_01JW52QDWQRSXKR3P6VB68XD5F	\N	2025-05-26 01:18:46.68+00	2025-05-26 01:18:46.68+00	\N
optval_01JW52QDWQQ5A8N2W8JAPAB5KJ	Large	opt_01JW52QDWQRSXKR3P6VB68XD5F	\N	2025-05-26 01:18:46.681+00	2025-05-26 01:18:46.681+00	\N
optval_01JW52THWP2VFTTSBKARHE9VKB	Default option value	opt_01JW52THWP0AYRCTTBHDBZ0QDK	\N	2025-05-26 01:20:29.08+00	2025-05-26 01:20:29.08+00	\N
optval_01JW52X12E3Z3CP0S1J8HZYR8H	Default option value	opt_01JW52X12FTC6RM2CZF4HAPAG0	\N	2025-05-26 01:21:50.159+00	2025-05-26 01:21:50.159+00	\N
optval_01JW531B6304WVF385JAEWZ29Y	Default option value	opt_01JW531B64C64MJ791ZFWQZK8T	\N	2025-05-26 01:24:11.589+00	2025-05-26 01:24:11.589+00	\N
optval_01JW53BCMTR294AQR6M2X0430V	Left	opt_01JW53BCMTSSN580MDB217G0W5	\N	2025-05-26 01:29:40.763+00	2025-05-26 01:29:40.763+00	\N
optval_01JW53BCMTQRW6T68K5CVFTV06	Right	opt_01JW53BCMTSSN580MDB217G0W5	\N	2025-05-26 01:29:40.763+00	2025-05-26 01:29:40.763+00	\N
optval_01JW5CY968CKXBB3F6P21MMV6T	Default option value	opt_01JW5CY968TZAN6GXQVQVK3TDE	\N	2025-05-26 04:17:17.001+00	2025-05-26 04:35:08.339+00	2025-05-26 04:35:08.313+00
optval_01JW5DZMF5GTAY9TEWHXA3G5A3	Default option value	opt_01JW5DZMF55EPJZN4KB0YT2MA5	\N	2025-05-26 04:35:29.894+00	2025-05-26 04:42:01.628+00	2025-05-26 04:42:01.609+00
optval_01JW5EBV922B1QX0KCYYC62MQN	Default option value	opt_01JW5EBV92MDW9P6A4T4AG9CCX	\N	2025-05-26 04:42:10.083+00	2025-05-26 04:48:43.144+00	2025-05-26 04:48:43.118+00
optval_01JW5ER4RVNYQ49N05PKEGMXPN	Default option value	opt_01JW5ER4RWSV7Q4AD4G27Y6C81	\N	2025-05-26 04:48:53.021+00	2025-05-26 04:56:42.633+00	2025-05-26 04:56:42.616+00
optval_01JW5ES2VNZ3RTGRKXRA4S5MJE	Default option value	opt_01JW5ES2VPSTZG7AYG962Z1SNW	\N	2025-05-26 04:49:23.831+00	2025-05-26 04:56:44.987+00	2025-05-26 04:56:44.969+00
optval_01JW5FJ7T4W2M4RYM3F0E11P9M	Default option value	opt_01JW5FJ7T4RR2AM47AZVZ3W835	\N	2025-05-26 05:03:08.102+00	2025-05-26 05:18:49.243+00	2025-05-26 05:18:49.219+00
optval_01JW5FX1MQQT43RQBQFV363SNK	Default option value	opt_01JW5FX1MQEPXZ0XDP4XESHQKY	\N	2025-05-26 05:09:02.233+00	2025-05-26 05:18:51.599+00	2025-05-26 05:18:51.577+00
optval_01JW5G3FV4EX6PPZVVJG0ZNSSR	Default option value	opt_01JW5G3FV4FFZ4YM5ENPMVF07A	\N	2025-05-26 05:12:33.382+00	2025-05-26 05:18:54.097+00	2025-05-26 05:18:54.086+00
optval_01JW5GCPJ9MJKWPFYQN51QE5ZW	Default option value	opt_01JW5GCPJAHS1JN6CKQEBXV754	\N	2025-05-26 05:17:35.179+00	2025-05-26 05:18:57.7+00	2025-05-26 05:18:57.691+00
optval_01JW7MR4QKKTFE9ABAWRG2P7NF	Default option value	opt_01JW7MR4QKDQK0NY31XWF8K6WR	\N	2025-05-27 01:12:13.301+00	2025-05-28 09:20:54.863+00	2025-05-28 09:20:54.835+00
\.


ALTER TABLE public.product_option_value ENABLE TRIGGER ALL;

--
-- Data for Name: product_product_hello_custom; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_product_hello_custom DISABLE TRIGGER ALL;

COPY public.product_product_hello_custom (product_id, custom_id, id, created_at, updated_at, deleted_at) FROM stdin;
prod_01JW7MR4QGPJH2KGGB4VDCKS7K	01JW7MR4T6GFNR8NNNZHWDMP6P	link_01JW7MR4TFFZ6YF9G32CA9A2ME	2025-05-27 01:12:13.390954+00	2025-05-28 09:20:54.848+00	2025-05-28 09:20:54.844+00
\.


ALTER TABLE public.product_product_hello_custom ENABLE TRIGGER ALL;

--
-- Data for Name: product_sales_channel; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_sales_channel DISABLE TRIGGER ALL;

COPY public.product_sales_channel (product_id, sales_channel_id, id, created_at, updated_at, deleted_at) FROM stdin;
prod_01JW4RMSR3BQN5ZTGVGZEYWW97	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW4RMSSFAHM5DWHNC2YZAAV6	2025-05-25 22:22:34.798675+00	2025-05-25 22:22:34.798675+00	\N
prod_01JW52BRWJJPRW1WZPQASN16MX	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW52BRX8SDKA4G8XEG8GZ9SC	2025-05-26 01:12:24.744482+00	2025-05-26 01:12:24.744482+00	\N
prod_01JW52G5BF9KFWAB74DJWNBQES	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW52G5C6HMGQS3STYTFW0GVB	2025-05-26 01:14:48.582498+00	2025-05-26 01:14:48.582498+00	\N
prod_01JW52QDWP5TMCR71KGF31TEJC	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW52QDXE08GAZTENJ6PY9V48	2025-05-26 01:18:46.7019+00	2025-05-26 01:18:46.7019+00	\N
prod_01JW52THWPY5GW4W1YQVK057FC	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW52THX457V0TH1C0EJR4N53	2025-05-26 01:20:29.092019+00	2025-05-26 01:20:29.092019+00	\N
prod_01JW52X12E60RC2E4SW32E1V7J	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW52X12WCNERE3QXHW45AERX	2025-05-26 01:21:50.17245+00	2025-05-26 01:21:50.17245+00	\N
prod_01JW531B63275DNMD94HN4CHNG	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW531B6VX55MF0TSHSDAVM07	2025-05-26 01:24:11.609684+00	2025-05-26 01:24:11.609684+00	\N
prod_01JW53BCMSQ7XHD3XG1RVJSTE0	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW53BCN7T7GZ389S31VXABGX	2025-05-26 01:29:40.775508+00	2025-05-26 01:29:40.775508+00	\N
prod_01JW5CY968T8XV8272V1YQMZ7F	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW5CY976PFTAN3MK0FZJ3E0Y	2025-05-26 04:17:17.030453+00	2025-05-26 04:35:08.334+00	2025-05-26 04:35:08.325+00
prod_01JW5DZMF44N0FS5RCA8623TNX	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW5DZMFTGXQ9HFDGDQX0XK6R	2025-05-26 04:35:29.914077+00	2025-05-26 04:42:01.623+00	2025-05-26 04:42:01.619+00
prod_01JW5EBV923VJ8AG6P50JCXKRP	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW5EBVAR0P8A2FTVM52S8N55	2025-05-26 04:42:10.13559+00	2025-05-26 04:48:43.137+00	2025-05-26 04:48:43.129+00
prod_01JW5ER4RT3EQY109GP0CEFXE3	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW5ER4SXV3FQ74A2N6K4CBZV	2025-05-26 04:48:53.052734+00	2025-05-26 04:56:42.624+00	2025-05-26 04:56:42.62+00
prod_01JW5ES2VNRTGS6C1B277XH4P2	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW5ES2XJT5Y24TCFWN04H2GS	2025-05-26 04:49:23.890565+00	2025-05-26 04:56:44.976+00	2025-05-26 04:56:44.976+00
prod_01JW5FJ7T1K9JZ75Q4NF82ZNY5	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW5FJ7TXYM8VJYDCXVQZR66S	2025-05-26 05:03:08.124691+00	2025-05-26 05:18:49.251+00	2025-05-26 05:18:49.25+00
prod_01JW5FX1MMC9KWQEMW6KVZZQDQ	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW5FX1NK3FQ8WTCKGR5RG1ND	2025-05-26 05:09:02.25852+00	2025-05-26 05:18:51.587+00	2025-05-26 05:18:51.585+00
prod_01JW5G3FV2YEGMF810B3W5Y2AD	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW5G3FWBBAQAC01MY57A35TS	2025-05-26 05:12:33.418947+00	2025-05-26 05:18:54.088+00	2025-05-26 05:18:54.085+00
prod_01JW5GCPJ8WXD5QTA3N6ZF1QQS	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	prodsc_01JW5GCPKNJ4S0P0ACHDGB72GZ	2025-05-26 05:17:35.221273+00	2025-05-26 05:18:57.692+00	2025-05-26 05:18:57.691+00
\.


ALTER TABLE public.product_sales_channel ENABLE TRIGGER ALL;

--
-- Data for Name: product_shipping_profile; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_shipping_profile DISABLE TRIGGER ALL;

COPY public.product_shipping_profile (product_id, shipping_profile_id, id, created_at, updated_at, deleted_at) FROM stdin;
prod_01JW4RMSR3BQN5ZTGVGZEYWW97	sp_01JW4P1WYM9YCFNQX8K9GSQTN1	prodsp_01JW4RMSSWY53Z7QTCM57T3NMF	2025-05-25 22:22:34.812391+00	2025-05-25 22:22:34.812391+00	\N
prod_01JW7MR4QGPJH2KGGB4VDCKS7K	{shipping_profile_id}	prodsp_01JW7MR4RX813GACWFGVMFPMYF	2025-05-27 01:12:13.341322+00	2025-05-28 09:20:54.848+00	2025-05-28 09:20:54.843+00
\.


ALTER TABLE public.product_shipping_profile ENABLE TRIGGER ALL;

--
-- Data for Name: product_tag; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_tag DISABLE TRIGGER ALL;

COPY public.product_tag (id, value, metadata, created_at, updated_at, deleted_at) FROM stdin;
ptag_01JW544T0J765ZTZX5QY41YET9	penholder	\N	2025-05-26 01:43:33.65+00	2025-05-26 01:43:33.65+00	\N
ptag_01JW5458HZHNRMWT8BGS3E19EG	pen	\N	2025-05-26 01:43:48.543+00	2025-05-26 01:43:48.543+00	\N
\.


ALTER TABLE public.product_tag ENABLE TRIGGER ALL;

--
-- Data for Name: product_tags; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_tags DISABLE TRIGGER ALL;

COPY public.product_tags (product_id, product_tag_id) FROM stdin;
\.


ALTER TABLE public.product_tags ENABLE TRIGGER ALL;

--
-- Data for Name: product_variant; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_variant DISABLE TRIGGER ALL;

COPY public.product_variant (id, title, sku, barcode, ean, upc, allow_backorder, manage_inventory, hs_code, origin_country, mid_code, material, weight, length, height, width, metadata, variant_rank, product_id, created_at, updated_at, deleted_at) FROM stdin;
variant_01JW4RMSTJCKZZREHTGKF31R8E	Yes / 24	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.838+00	2025-05-25 22:22:34.838+00	\N
variant_01JW4RMSTJ3E0RVZGJAFMAARYQ	No / 24	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	1	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.838+00	2025-05-25 22:22:34.838+00	\N
variant_01JW4RMSTKX3ZNYHAH65EXD25X	Yes / 25	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	2	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTKTDH2KVXDMJDQY7AK	No / 25	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	3	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTKR7QWP38KBKRBA65Y	Yes / 26	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	4	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTKWD2SBMTBZJTEMXV0	No / 26	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	5	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTMHDTMCWNWK0GVXSQH	Yes / 27	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	6	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTMJNDABW43SY8KAEME	No / 27	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	7	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTMR900E6SCSFF11V2T	Yes / 28	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	8	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTM2KXGPJNHCHK1DDZJ	No / 28	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	9	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTNMBCYC0X2PYD4KAHA	Yes / 29	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	10	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTNQP1EEBQT7299F194	No / 29	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	11	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTN1C2B4QF8BYBPBQDD	Yes / 30	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	12	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTN3AV776862E2Q3D1R	No / 30	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	13	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTNHHHK930J3DXSDTZZ	Yes / 31	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	14	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTNTX0RRHA6V7RQGSVK	No / 31	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	15	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTPP9ARBGH4MZN3SQ58	Yes / 32	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	16	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW4RMSTPX8QYASPRF3FTKEDQ	No / 32	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	17	prod_01JW4RMSR3BQN5ZTGVGZEYWW97	2025-05-25 22:22:34.839+00	2025-05-25 22:22:34.839+00	\N
variant_01JW52BRY2NJBY8NJKFJKYKK77	Small / Narrow	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW52BRWJJPRW1WZPQASN16MX	2025-05-26 01:12:24.772+00	2025-05-26 01:12:24.772+00	\N
variant_01JW52BRY2V3XV300C9ET1QSHE	Medium / Narrow	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	1	prod_01JW52BRWJJPRW1WZPQASN16MX	2025-05-26 01:12:24.772+00	2025-05-26 01:12:24.772+00	\N
variant_01JW52BRY2726YY7FVCE02R0PG	Large / Narrow	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	2	prod_01JW52BRWJJPRW1WZPQASN16MX	2025-05-26 01:12:24.772+00	2025-05-26 01:12:24.772+00	\N
variant_01JW52BRY28P6RYZYX3EVB8MH5	Small / Standard	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	3	prod_01JW52BRWJJPRW1WZPQASN16MX	2025-05-26 01:12:24.772+00	2025-05-26 01:12:24.772+00	\N
variant_01JW52BRY3G8RTM4EV1K92HP1D	Medium / Standard	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	4	prod_01JW52BRWJJPRW1WZPQASN16MX	2025-05-26 01:12:24.772+00	2025-05-26 01:12:24.772+00	\N
variant_01JW52BRY3SBFRBB79J9DQB8GD	Large / Standard	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	5	prod_01JW52BRWJJPRW1WZPQASN16MX	2025-05-26 01:12:24.772+00	2025-05-26 01:12:24.772+00	\N
variant_01JW52BRY3AW9F6DPP51CB47YA	Small / Wide	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	6	prod_01JW52BRWJJPRW1WZPQASN16MX	2025-05-26 01:12:24.773+00	2025-05-26 01:12:24.773+00	\N
variant_01JW52BRY3C41QTPQRCT15HDAJ	Medium / Wide	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	7	prod_01JW52BRWJJPRW1WZPQASN16MX	2025-05-26 01:12:24.773+00	2025-05-26 01:12:24.773+00	\N
variant_01JW52BRY3RGCKCCD0DJW7ZXHN	Large / Wide	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	8	prod_01JW52BRWJJPRW1WZPQASN16MX	2025-05-26 01:12:24.773+00	2025-05-26 01:12:24.773+00	\N
variant_01JW52G5CYG37HJ50CVZYBVJEX	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW52G5BF9KFWAB74DJWNBQES	2025-05-26 01:14:48.607+00	2025-05-26 01:14:48.607+00	\N
variant_01JW52QDY73T7DN41ESA11FS38	Small / Small	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW52QDWP5TMCR71KGF31TEJC	2025-05-26 01:18:46.73+00	2025-05-26 01:18:46.73+00	\N
variant_01JW52QDY7VS9R1E7MNAJ3XJEM	Medium / Small	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	1	prod_01JW52QDWP5TMCR71KGF31TEJC	2025-05-26 01:18:46.73+00	2025-05-26 01:18:46.73+00	\N
variant_01JW52QDY7P0GK4T5FGGA9MFW3	Large / Small	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	2	prod_01JW52QDWP5TMCR71KGF31TEJC	2025-05-26 01:18:46.73+00	2025-05-26 01:18:46.73+00	\N
variant_01JW52QDY7GPATTDPN7Z66VS20	Small / Medium	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	3	prod_01JW52QDWP5TMCR71KGF31TEJC	2025-05-26 01:18:46.73+00	2025-05-26 01:18:46.73+00	\N
variant_01JW52QDY8CJTB1TCAZJN317QN	Medium / Medium	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	4	prod_01JW52QDWP5TMCR71KGF31TEJC	2025-05-26 01:18:46.73+00	2025-05-26 01:18:46.73+00	\N
variant_01JW52QDY8NQ694NS946WJBAWQ	Large / Medium	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	5	prod_01JW52QDWP5TMCR71KGF31TEJC	2025-05-26 01:18:46.73+00	2025-05-26 01:18:46.73+00	\N
variant_01JW52QDY8G1F8AQQM78X2YC8A	Small / Large	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	6	prod_01JW52QDWP5TMCR71KGF31TEJC	2025-05-26 01:18:46.73+00	2025-05-26 01:18:46.73+00	\N
variant_01JW52QDY9EPX1VHN4A0W8ZXFR	Medium / Large	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	7	prod_01JW52QDWP5TMCR71KGF31TEJC	2025-05-26 01:18:46.73+00	2025-05-26 01:18:46.73+00	\N
variant_01JW52QDY9Q8MWWVSFASYMRNJY	Large / Large	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	8	prod_01JW52QDWP5TMCR71KGF31TEJC	2025-05-26 01:18:46.73+00	2025-05-26 01:18:46.73+00	\N
variant_01JW52THXPYMX66Q9N6480VCDV	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW52THWPY5GW4W1YQVK057FC	2025-05-26 01:20:29.111+00	2025-05-26 01:20:29.111+00	\N
variant_01JW52X13FRC76BQ126XR1Z3HQ	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW52X12E60RC2E4SW32E1V7J	2025-05-26 01:21:50.192+00	2025-05-26 01:21:50.192+00	\N
variant_01JW531B7C2PSA7F20GGBH5RD2	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW531B63275DNMD94HN4CHNG	2025-05-26 01:24:11.628+00	2025-05-26 01:24:11.628+00	\N
variant_01JW53BCNNFFT64S28MENSF91Q	Left	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW53BCMSQ7XHD3XG1RVJSTE0	2025-05-26 01:29:40.789+00	2025-05-26 01:29:40.789+00	\N
variant_01JW53BCNNVQBNYKSG2R3DYQDW	Right	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	1	prod_01JW53BCMSQ7XHD3XG1RVJSTE0	2025-05-26 01:29:40.789+00	2025-05-26 01:29:40.789+00	\N
variant_01JW5CY97XQ42DSQCFWH261E0Y	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW5CY968T8XV8272V1YQMZ7F	2025-05-26 04:17:17.053+00	2025-05-26 04:35:08.332+00	2025-05-26 04:35:08.313+00
variant_01JW5DZMGTZGAK170JZN0YM6R9	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW5DZMF44N0FS5RCA8623TNX	2025-05-26 04:35:29.947+00	2025-05-26 04:42:01.621+00	2025-05-26 04:42:01.609+00
variant_01JW5EBVBCDVYWZ6H87DM235KD	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW5EBV923VJ8AG6P50JCXKRP	2025-05-26 04:42:10.156+00	2025-05-26 04:48:43.135+00	2025-05-26 04:48:43.118+00
variant_01JW5ER4TW342A8YRE8ES7RK0S	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW5ER4RT3EQY109GP0CEFXE3	2025-05-26 04:48:53.084+00	2025-05-26 04:56:42.627+00	2025-05-26 04:56:42.616+00
variant_01JW5ES2YBXVKDCVPERZBKD1J8	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW5ES2VNRTGS6C1B277XH4P2	2025-05-26 04:49:23.916+00	2025-05-26 04:56:44.979+00	2025-05-26 04:56:44.969+00
variant_01JW5FJ7VTBDDJ1BD3MPJT4K75	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW5FJ7T1K9JZ75Q4NF82ZNY5	2025-05-26 05:03:08.155+00	2025-05-26 05:18:49.234+00	2025-05-26 05:18:49.219+00
variant_01JW5FX1PSHKYQRTEVHCYWF6Z9	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW5FX1MMC9KWQEMW6KVZZQDQ	2025-05-26 05:09:02.297+00	2025-05-26 05:18:51.592+00	2025-05-26 05:18:51.577+00
variant_01JW5G3FXEDSRSY68ZBKSDEG4W	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW5G3FV2YEGMF810B3W5Y2AD	2025-05-26 05:12:33.454+00	2025-05-26 05:18:54.093+00	2025-05-26 05:18:54.086+00
variant_01JW5GCPMK4J3FQK3KNDTYSFBJ	Default variant	\N	\N	\N	\N	f	f	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	prod_01JW5GCPJ8WXD5QTA3N6ZF1QQS	2025-05-26 05:17:35.252+00	2025-05-26 05:18:57.697+00	2025-05-26 05:18:57.691+00
\.


ALTER TABLE public.product_variant ENABLE TRIGGER ALL;

--
-- Data for Name: product_variant_inventory_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_variant_inventory_item DISABLE TRIGGER ALL;

COPY public.product_variant_inventory_item (variant_id, inventory_item_id, id, required_quantity, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.product_variant_inventory_item ENABLE TRIGGER ALL;

--
-- Data for Name: product_variant_option; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_variant_option DISABLE TRIGGER ALL;

COPY public.product_variant_option (variant_id, option_value_id) FROM stdin;
variant_01JW4RMSTJCKZZREHTGKF31R8E	optval_01JW4RMSR7E2695HW04TY0DSYV
variant_01JW4RMSTJCKZZREHTGKF31R8E	optval_01JW4RMSR8N4D4P2S341ZV3NYH
variant_01JW4RMSTJ3E0RVZGJAFMAARYQ	optval_01JW4RMSR7B1T397KRP4VP966V
variant_01JW4RMSTJ3E0RVZGJAFMAARYQ	optval_01JW4RMSR8N4D4P2S341ZV3NYH
variant_01JW4RMSTKX3ZNYHAH65EXD25X	optval_01JW4RMSR7E2695HW04TY0DSYV
variant_01JW4RMSTKX3ZNYHAH65EXD25X	optval_01JW4RMSR8HRQK1J81R6ZHRA55
variant_01JW4RMSTKTDH2KVXDMJDQY7AK	optval_01JW4RMSR7B1T397KRP4VP966V
variant_01JW4RMSTKTDH2KVXDMJDQY7AK	optval_01JW4RMSR8HRQK1J81R6ZHRA55
variant_01JW4RMSTKR7QWP38KBKRBA65Y	optval_01JW4RMSR7E2695HW04TY0DSYV
variant_01JW4RMSTKR7QWP38KBKRBA65Y	optval_01JW4RMSR8W60ASCHP9BSM052Y
variant_01JW4RMSTKWD2SBMTBZJTEMXV0	optval_01JW4RMSR7B1T397KRP4VP966V
variant_01JW4RMSTKWD2SBMTBZJTEMXV0	optval_01JW4RMSR8W60ASCHP9BSM052Y
variant_01JW4RMSTMHDTMCWNWK0GVXSQH	optval_01JW4RMSR7E2695HW04TY0DSYV
variant_01JW4RMSTMHDTMCWNWK0GVXSQH	optval_01JW4RMSR8774PV7SWAGJ59JRH
variant_01JW4RMSTMJNDABW43SY8KAEME	optval_01JW4RMSR7B1T397KRP4VP966V
variant_01JW4RMSTMJNDABW43SY8KAEME	optval_01JW4RMSR8774PV7SWAGJ59JRH
variant_01JW4RMSTMR900E6SCSFF11V2T	optval_01JW4RMSR7E2695HW04TY0DSYV
variant_01JW4RMSTMR900E6SCSFF11V2T	optval_01JW4RMSR888EHRWJXB5103331
variant_01JW4RMSTM2KXGPJNHCHK1DDZJ	optval_01JW4RMSR7B1T397KRP4VP966V
variant_01JW4RMSTM2KXGPJNHCHK1DDZJ	optval_01JW4RMSR888EHRWJXB5103331
variant_01JW4RMSTNMBCYC0X2PYD4KAHA	optval_01JW4RMSR7E2695HW04TY0DSYV
variant_01JW4RMSTNMBCYC0X2PYD4KAHA	optval_01JW4RMSR9C3NDDSWFF23TV9GV
variant_01JW4RMSTNQP1EEBQT7299F194	optval_01JW4RMSR7B1T397KRP4VP966V
variant_01JW4RMSTNQP1EEBQT7299F194	optval_01JW4RMSR9C3NDDSWFF23TV9GV
variant_01JW4RMSTN1C2B4QF8BYBPBQDD	optval_01JW4RMSR7E2695HW04TY0DSYV
variant_01JW4RMSTN1C2B4QF8BYBPBQDD	optval_01JW4RMSR9E493AH0KX3REXFDR
variant_01JW4RMSTN3AV776862E2Q3D1R	optval_01JW4RMSR7B1T397KRP4VP966V
variant_01JW4RMSTN3AV776862E2Q3D1R	optval_01JW4RMSR9E493AH0KX3REXFDR
variant_01JW4RMSTNHHHK930J3DXSDTZZ	optval_01JW4RMSR7E2695HW04TY0DSYV
variant_01JW4RMSTNHHHK930J3DXSDTZZ	optval_01JW4RMSR9KAF0V4E4WRXEPEY0
variant_01JW4RMSTNTX0RRHA6V7RQGSVK	optval_01JW4RMSR7B1T397KRP4VP966V
variant_01JW4RMSTNTX0RRHA6V7RQGSVK	optval_01JW4RMSR9KAF0V4E4WRXEPEY0
variant_01JW4RMSTPP9ARBGH4MZN3SQ58	optval_01JW4RMSR7E2695HW04TY0DSYV
variant_01JW4RMSTPP9ARBGH4MZN3SQ58	optval_01JW4RMSR9MS3QP9CJZS07D8C6
variant_01JW4RMSTPX8QYASPRF3FTKEDQ	optval_01JW4RMSR7B1T397KRP4VP966V
variant_01JW4RMSTPX8QYASPRF3FTKEDQ	optval_01JW4RMSR9MS3QP9CJZS07D8C6
variant_01JW52BRY2NJBY8NJKFJKYKK77	optval_01JW52BRWKAPDJXN9TG40NYKXS
variant_01JW52BRY2NJBY8NJKFJKYKK77	optval_01JW52BRWK6ZJMH7JC81KFM7M9
variant_01JW52BRY2V3XV300C9ET1QSHE	optval_01JW52BRWKHF127Y4JYJ550KX4
variant_01JW52BRY2V3XV300C9ET1QSHE	optval_01JW52BRWK6ZJMH7JC81KFM7M9
variant_01JW52BRY2726YY7FVCE02R0PG	optval_01JW52BRWK36TPY88X3J2VBXD3
variant_01JW52BRY2726YY7FVCE02R0PG	optval_01JW52BRWK6ZJMH7JC81KFM7M9
variant_01JW52BRY28P6RYZYX3EVB8MH5	optval_01JW52BRWKAPDJXN9TG40NYKXS
variant_01JW52BRY28P6RYZYX3EVB8MH5	optval_01JW52BRWKEF9TSAPP2ZEV6CSJ
variant_01JW52BRY3G8RTM4EV1K92HP1D	optval_01JW52BRWKHF127Y4JYJ550KX4
variant_01JW52BRY3G8RTM4EV1K92HP1D	optval_01JW52BRWKEF9TSAPP2ZEV6CSJ
variant_01JW52BRY3SBFRBB79J9DQB8GD	optval_01JW52BRWK36TPY88X3J2VBXD3
variant_01JW52BRY3SBFRBB79J9DQB8GD	optval_01JW52BRWKEF9TSAPP2ZEV6CSJ
variant_01JW52BRY3AW9F6DPP51CB47YA	optval_01JW52BRWKAPDJXN9TG40NYKXS
variant_01JW52BRY3AW9F6DPP51CB47YA	optval_01JW52BRWKR71WQS6E6W3K8KZF
variant_01JW52BRY3C41QTPQRCT15HDAJ	optval_01JW52BRWKHF127Y4JYJ550KX4
variant_01JW52BRY3C41QTPQRCT15HDAJ	optval_01JW52BRWKR71WQS6E6W3K8KZF
variant_01JW52BRY3RGCKCCD0DJW7ZXHN	optval_01JW52BRWK36TPY88X3J2VBXD3
variant_01JW52BRY3RGCKCCD0DJW7ZXHN	optval_01JW52BRWKR71WQS6E6W3K8KZF
variant_01JW52G5CYG37HJ50CVZYBVJEX	optval_01JW52G5BG7KJJ5R5MTD8XCKWE
variant_01JW52QDY73T7DN41ESA11FS38	optval_01JW52QDWPE11RS1P6MXZCMGQH
variant_01JW52QDY73T7DN41ESA11FS38	optval_01JW52QDWQR909PTARFBGRYZK8
variant_01JW52QDY7VS9R1E7MNAJ3XJEM	optval_01JW52QDWPRB2MFDA6K8SJN9YA
variant_01JW52QDY7VS9R1E7MNAJ3XJEM	optval_01JW52QDWQR909PTARFBGRYZK8
variant_01JW52QDY7P0GK4T5FGGA9MFW3	optval_01JW52QDWPQ9ZDGYYVHD05G36G
variant_01JW52QDY7P0GK4T5FGGA9MFW3	optval_01JW52QDWQR909PTARFBGRYZK8
variant_01JW52QDY7GPATTDPN7Z66VS20	optval_01JW52QDWPE11RS1P6MXZCMGQH
variant_01JW52QDY7GPATTDPN7Z66VS20	optval_01JW52QDWQYEGFFSXXF7Y1NKEC
variant_01JW52QDY8CJTB1TCAZJN317QN	optval_01JW52QDWPRB2MFDA6K8SJN9YA
variant_01JW52QDY8CJTB1TCAZJN317QN	optval_01JW52QDWQYEGFFSXXF7Y1NKEC
variant_01JW52QDY8NQ694NS946WJBAWQ	optval_01JW52QDWPQ9ZDGYYVHD05G36G
variant_01JW52QDY8NQ694NS946WJBAWQ	optval_01JW52QDWQYEGFFSXXF7Y1NKEC
variant_01JW52QDY8G1F8AQQM78X2YC8A	optval_01JW52QDWPE11RS1P6MXZCMGQH
variant_01JW52QDY8G1F8AQQM78X2YC8A	optval_01JW52QDWQQ5A8N2W8JAPAB5KJ
variant_01JW52QDY9EPX1VHN4A0W8ZXFR	optval_01JW52QDWPRB2MFDA6K8SJN9YA
variant_01JW52QDY9EPX1VHN4A0W8ZXFR	optval_01JW52QDWQQ5A8N2W8JAPAB5KJ
variant_01JW52QDY9Q8MWWVSFASYMRNJY	optval_01JW52QDWPQ9ZDGYYVHD05G36G
variant_01JW52QDY9Q8MWWVSFASYMRNJY	optval_01JW52QDWQQ5A8N2W8JAPAB5KJ
variant_01JW52THXPYMX66Q9N6480VCDV	optval_01JW52THWP2VFTTSBKARHE9VKB
variant_01JW52X13FRC76BQ126XR1Z3HQ	optval_01JW52X12E3Z3CP0S1J8HZYR8H
variant_01JW531B7C2PSA7F20GGBH5RD2	optval_01JW531B6304WVF385JAEWZ29Y
variant_01JW53BCNNFFT64S28MENSF91Q	optval_01JW53BCMTR294AQR6M2X0430V
variant_01JW53BCNNVQBNYKSG2R3DYQDW	optval_01JW53BCMTQRW6T68K5CVFTV06
variant_01JW5CY97XQ42DSQCFWH261E0Y	optval_01JW5CY968CKXBB3F6P21MMV6T
variant_01JW5DZMGTZGAK170JZN0YM6R9	optval_01JW5DZMF5GTAY9TEWHXA3G5A3
variant_01JW5EBVBCDVYWZ6H87DM235KD	optval_01JW5EBV922B1QX0KCYYC62MQN
variant_01JW5ER4TW342A8YRE8ES7RK0S	optval_01JW5ER4RVNYQ49N05PKEGMXPN
variant_01JW5ES2YBXVKDCVPERZBKD1J8	optval_01JW5ES2VNZ3RTGRKXRA4S5MJE
variant_01JW5FJ7VTBDDJ1BD3MPJT4K75	optval_01JW5FJ7T4W2M4RYM3F0E11P9M
variant_01JW5FX1PSHKYQRTEVHCYWF6Z9	optval_01JW5FX1MQQT43RQBQFV363SNK
variant_01JW5G3FXEDSRSY68ZBKSDEG4W	optval_01JW5G3FV4EX6PPZVVJG0ZNSSR
variant_01JW5GCPMK4J3FQK3KNDTYSFBJ	optval_01JW5GCPJ9MJKWPFYQN51QE5ZW
\.


ALTER TABLE public.product_variant_option ENABLE TRIGGER ALL;

--
-- Data for Name: product_variant_price_set; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.product_variant_price_set DISABLE TRIGGER ALL;

COPY public.product_variant_price_set (variant_id, price_set_id, id, created_at, updated_at, deleted_at) FROM stdin;
variant_01JW4RMSTJCKZZREHTGKF31R8E	pset_01JW4RMSW0Y78Y67SN0ET6KQ44	pvps_01JW4RMSX0KK0JTPH9G9VA0NMF	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTJ3E0RVZGJAFMAARYQ	pset_01JW4RMSW1RM1M6ST0GBG8F43G	pvps_01JW4RMSX1F9T995ZYBGKP4FKR	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTKX3ZNYHAH65EXD25X	pset_01JW4RMSW1NYT3NGBPT3AXQWT9	pvps_01JW4RMSX1YNRG4E8KZRNRMVT5	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTKTDH2KVXDMJDQY7AK	pset_01JW4RMSW1YET6DFXHVYKXR6SD	pvps_01JW4RMSX15HZV0EGN9XEMX6G1	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTKR7QWP38KBKRBA65Y	pset_01JW4RMSW17KZ64CHNCK7TPW4Q	pvps_01JW4RMSX1SA593Y8EJ245VQVZ	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTKWD2SBMTBZJTEMXV0	pset_01JW4RMSW1C57PMJQ4KJ4P95T3	pvps_01JW4RMSX17EM3Y3DACFSNTBAP	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTMHDTMCWNWK0GVXSQH	pset_01JW4RMSW17SQZJYN7E80KD421	pvps_01JW4RMSX2Z8V0A36CGQCQZNK2	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTMJNDABW43SY8KAEME	pset_01JW4RMSW1Z0KDCX8ADGXFJXMT	pvps_01JW4RMSX24ASBYQTR6EEEKKB8	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTMR900E6SCSFF11V2T	pset_01JW4RMSW1MBSWF7VYX67P6AG5	pvps_01JW4RMSX2MAQ0XQHBQGQYYSZW	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTM2KXGPJNHCHK1DDZJ	pset_01JW4RMSW1FPE3YJ7T50S6EPJH	pvps_01JW4RMSX2MBM91Q4N772K9QKB	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTNMBCYC0X2PYD4KAHA	pset_01JW4RMSW2V755EAJXKCTJ9XX6	pvps_01JW4RMSX2YBZSZC2ZFV3WD3DQ	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTNQP1EEBQT7299F194	pset_01JW4RMSW2DJCKW92VQWCSK6K8	pvps_01JW4RMSX228JA2S91NH5N9905	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTN1C2B4QF8BYBPBQDD	pset_01JW4RMSW2QE31PNZMFGWAHK4T	pvps_01JW4RMSX274EHGXJSQN50R8Y1	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTN3AV776862E2Q3D1R	pset_01JW4RMSW256TWA73E309EJCWW	pvps_01JW4RMSX3DPCSD54CYYB1KFZB	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTNHHHK930J3DXSDTZZ	pset_01JW4RMSW2SAQYBHM22CF74SAW	pvps_01JW4RMSX3Y2TE548JF06NRZPC	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTNTX0RRHA6V7RQGSVK	pset_01JW4RMSW2P39EQZTQNSAYF225	pvps_01JW4RMSX390YAF4NA82SBR5DB	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTPP9ARBGH4MZN3SQ58	pset_01JW4RMSW26D7RN7195W79B8ER	pvps_01JW4RMSX3R0BPR4QA919SS364	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW4RMSTPX8QYASPRF3FTKEDQ	pset_01JW4RMSW2CC6G73HS4WKJE0K5	pvps_01JW4RMSX3JK82CVDJATWZRCVF	2025-05-25 22:22:34.912419+00	2025-05-25 22:22:34.912419+00	\N
variant_01JW52BRY2NJBY8NJKFJKYKK77	pset_01JW52BRZ5W5P1C1742RCD2C65	pvps_01JW52BRZVVCFHCB8NQ130C4XW	2025-05-26 01:12:24.827514+00	2025-05-26 01:12:24.827514+00	\N
variant_01JW52BRY2V3XV300C9ET1QSHE	pset_01JW52BRZ593567EW22EBGXCG6	pvps_01JW52BRZVFQAFYZ1P1WYD7HYP	2025-05-26 01:12:24.827514+00	2025-05-26 01:12:24.827514+00	\N
variant_01JW52BRY2726YY7FVCE02R0PG	pset_01JW52BRZ5WYXG2NH22MGQ26FB	pvps_01JW52BRZWBD241EZ23S1E18WQ	2025-05-26 01:12:24.827514+00	2025-05-26 01:12:24.827514+00	\N
variant_01JW52BRY28P6RYZYX3EVB8MH5	pset_01JW52BRZ5WN6B1KBPZN0V28PE	pvps_01JW52BRZWTGSDNM7V8MQMDPKV	2025-05-26 01:12:24.827514+00	2025-05-26 01:12:24.827514+00	\N
variant_01JW52BRY3G8RTM4EV1K92HP1D	pset_01JW52BRZ5S0HK1Q7Z1A9RA7H4	pvps_01JW52BRZW39TKE96X4V6JMYZB	2025-05-26 01:12:24.827514+00	2025-05-26 01:12:24.827514+00	\N
variant_01JW52BRY3SBFRBB79J9DQB8GD	pset_01JW52BRZ5ASPSZ0PYTC77NPE0	pvps_01JW52BRZWAD1DSXG5ZNBBD17H	2025-05-26 01:12:24.827514+00	2025-05-26 01:12:24.827514+00	\N
variant_01JW52BRY3AW9F6DPP51CB47YA	pset_01JW52BRZ5EAD5ZQ0TTFGMV3EZ	pvps_01JW52BRZW4PXE3ZE8YERF5B06	2025-05-26 01:12:24.827514+00	2025-05-26 01:12:24.827514+00	\N
variant_01JW52BRY3C41QTPQRCT15HDAJ	pset_01JW52BRZ5H4GEK1SEN90EKCW7	pvps_01JW52BRZWPRFZAHXQB6BK59KM	2025-05-26 01:12:24.827514+00	2025-05-26 01:12:24.827514+00	\N
variant_01JW52BRY3RGCKCCD0DJW7ZXHN	pset_01JW52BRZ52BTVEDQTKNAVNNK3	pvps_01JW52BRZWHHNW64KWZ65STDNK	2025-05-26 01:12:24.827514+00	2025-05-26 01:12:24.827514+00	\N
variant_01JW52G5CYG37HJ50CVZYBVJEX	pset_01JW52G5DJZ2TMSKB3SWQWPZF1	pvps_01JW52G5E3T9YE0JVTE6DRREXY	2025-05-26 01:14:48.642838+00	2025-05-26 01:14:48.642838+00	\N
variant_01JW52QDY73T7DN41ESA11FS38	pset_01JW52QDZ73GJQQ8NZRTAWNSCP	pvps_01JW52QDZQ0WKZT4T987V26TKY	2025-05-26 01:18:46.775791+00	2025-05-26 01:18:46.775791+00	\N
variant_01JW52QDY7VS9R1E7MNAJ3XJEM	pset_01JW52QDZ7HRA69SCWDKWHF1SP	pvps_01JW52QDZRWYNR3B3T56WF8A5Z	2025-05-26 01:18:46.775791+00	2025-05-26 01:18:46.775791+00	\N
variant_01JW52QDY7P0GK4T5FGGA9MFW3	pset_01JW52QDZ791Q2T5RXQAWGVJZE	pvps_01JW52QDZRP5QGC6A8DY7ZMSPD	2025-05-26 01:18:46.775791+00	2025-05-26 01:18:46.775791+00	\N
variant_01JW52QDY7GPATTDPN7Z66VS20	pset_01JW52QDZ7X3NQHYZGRTKX4VWR	pvps_01JW52QDZRN6H7DP5CW8MR2AF8	2025-05-26 01:18:46.775791+00	2025-05-26 01:18:46.775791+00	\N
variant_01JW52QDY8CJTB1TCAZJN317QN	pset_01JW52QDZ7H0TZF2Y24ST1C9AN	pvps_01JW52QDZR5BMZ5R0AQJNB8YPE	2025-05-26 01:18:46.775791+00	2025-05-26 01:18:46.775791+00	\N
variant_01JW52QDY8NQ694NS946WJBAWQ	pset_01JW52QDZ73P4H335Q7EJ02XXQ	pvps_01JW52QDZR332PKPA798TDH8HT	2025-05-26 01:18:46.775791+00	2025-05-26 01:18:46.775791+00	\N
variant_01JW52QDY8G1F8AQQM78X2YC8A	pset_01JW52QDZ7VS7CTFM6BJZGG62K	pvps_01JW52QDZR3HYDEDNNX73XM614	2025-05-26 01:18:46.775791+00	2025-05-26 01:18:46.775791+00	\N
variant_01JW52QDY9EPX1VHN4A0W8ZXFR	pset_01JW52QDZ7EJHXZ4E18Z4Z32KY	pvps_01JW52QDZRZMHG1JPNF8ZM3H2J	2025-05-26 01:18:46.775791+00	2025-05-26 01:18:46.775791+00	\N
variant_01JW52QDY9Q8MWWVSFASYMRNJY	pset_01JW52QDZ739X6786MQWBAZ5Z0	pvps_01JW52QDZRXVXJKNSKT8HJJBNJ	2025-05-26 01:18:46.775791+00	2025-05-26 01:18:46.775791+00	\N
variant_01JW52THXPYMX66Q9N6480VCDV	pset_01JW52THY44YMRDP3T5S7J1VXS	pvps_01JW52THYGGJZXMN7YE5E6BGGT	2025-05-26 01:20:29.1361+00	2025-05-26 01:20:29.1361+00	\N
variant_01JW52X13FRC76BQ126XR1Z3HQ	pset_01JW52X13XH11PVVB42NTQX3N4	pvps_01JW52X148HHC5DQ9V597D784G	2025-05-26 01:21:50.216619+00	2025-05-26 01:21:50.216619+00	\N
variant_01JW531B7C2PSA7F20GGBH5RD2	pset_01JW531B7TD96VSCGT2AY96JWQ	pvps_01JW531B88MAPP5DHTE3MCTFGV	2025-05-26 01:24:11.655835+00	2025-05-26 01:24:11.655835+00	\N
variant_01JW53BCNNFFT64S28MENSF91Q	pset_01JW53BCP5EWS47GABA24RT00S	pvps_01JW53BCPN8WDRF1YY21J890DF	2025-05-26 01:29:40.821439+00	2025-05-26 01:29:40.821439+00	\N
variant_01JW53BCNNVQBNYKSG2R3DYQDW	pset_01JW53BCP5DBPXJ9CXQW4MM4GY	pvps_01JW53BCPN7M0C1NCQ2JBF60N5	2025-05-26 01:29:40.821439+00	2025-05-26 01:29:40.821439+00	\N
variant_01JW5CY97XQ42DSQCFWH261E0Y	pset_01JW5CY98JXE5KPGP75ETWE89W	pvps_01JW5CY99BEQ6HTW5BYYK4SQG8	2025-05-26 04:17:17.098958+00	2025-05-26 04:35:08.334+00	2025-05-26 04:35:08.328+00
variant_01JW5DZMGTZGAK170JZN0YM6R9	pset_01JW5DZMHHYMSNVHSNNK22JYWF	pvps_01JW5DZMJ58Q29EHA93DJHSAH2	2025-05-26 04:35:29.989141+00	2025-05-26 04:42:01.623+00	2025-05-26 04:42:01.617+00
variant_01JW5EBVBCDVYWZ6H87DM235KD	pset_01JW5EBVBZVV2VF64PGQ896GCV	pvps_01JW5EBVCFD86V3Y9F37JEZ7MF	2025-05-26 04:42:10.191765+00	2025-05-26 04:48:43.137+00	2025-05-26 04:48:43.132+00
variant_01JW5ER4TW342A8YRE8ES7RK0S	pset_01JW5ER4VDZVTNHJ1BBDK095F9	pvps_01JW5ER4W29RYY46K7ZN9E2WXE	2025-05-26 04:48:53.122051+00	2025-05-26 04:56:42.624+00	2025-05-26 04:56:42.62+00
variant_01JW5ES2YBXVKDCVPERZBKD1J8	pset_01JW5ES2Z11F2NK02M9TNR0R0F	pvps_01JW5ES2ZFJ9JDHHST3CSQ786M	2025-05-26 04:49:23.951577+00	2025-05-26 04:56:44.976+00	2025-05-26 04:56:44.97+00
variant_01JW5FJ7VTBDDJ1BD3MPJT4K75	pset_01JW5FJ7WBNAN35YKSKX47ASRB	pvps_01JW5FJ7WX5KDE1XDJQQ2VAPFS	2025-05-26 05:03:08.189654+00	2025-05-26 05:18:49.241+00	2025-05-26 05:18:49.239+00
variant_01JW5FX1PSHKYQRTEVHCYWF6Z9	pset_01JW5FX1QDBCB9P6472VQH2P7D	pvps_01JW5FX1R0GDFRYQA8YAS9HCNG	2025-05-26 05:09:02.335943+00	2025-05-26 05:18:51.588+00	2025-05-26 05:18:51.586+00
variant_01JW5G3FXEDSRSY68ZBKSDEG4W	pset_01JW5G3G0FKSTB3DZ8P1TGTVAN	pvps_01JW5G3G0Z811EMDS6MVQT04D7	2025-05-26 05:12:33.567748+00	2025-05-26 05:18:54.088+00	2025-05-26 05:18:54.086+00
variant_01JW5GCPMK4J3FQK3KNDTYSFBJ	pset_01JW5GCPN9ZS6AS039G74BTHHY	pvps_01JW5GCPNYMRZC5F6RCG6W2BAQ	2025-05-26 05:17:35.293831+00	2025-05-26 05:18:57.692+00	2025-05-26 05:18:57.69+00
\.


ALTER TABLE public.product_variant_price_set ENABLE TRIGGER ALL;

--
-- Data for Name: promotion_campaign_budget; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.promotion_campaign_budget DISABLE TRIGGER ALL;

COPY public.promotion_campaign_budget (id, type, campaign_id, "limit", raw_limit, used, raw_used, created_at, updated_at, deleted_at, currency_code) FROM stdin;
\.


ALTER TABLE public.promotion_campaign_budget ENABLE TRIGGER ALL;

--
-- Data for Name: promotion_promotion_rule; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.promotion_promotion_rule DISABLE TRIGGER ALL;

COPY public.promotion_promotion_rule (promotion_id, promotion_rule_id) FROM stdin;
\.


ALTER TABLE public.promotion_promotion_rule ENABLE TRIGGER ALL;

--
-- Data for Name: promotion_rule_value; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.promotion_rule_value DISABLE TRIGGER ALL;

COPY public.promotion_rule_value (id, promotion_rule_id, value, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.promotion_rule_value ENABLE TRIGGER ALL;

--
-- Data for Name: provider_identity; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.provider_identity DISABLE TRIGGER ALL;

COPY public.provider_identity (id, entity_id, provider, auth_identity_id, user_metadata, provider_metadata, created_at, updated_at, deleted_at) FROM stdin;
01JW4PTTXC5P33HS2DR272GY4Q	krystian@ogonowski.it	emailpass	authid_01JW4PTTXDSBXD2G3F50GG79A7	\N	{"password": "c2NyeXB0AA8AAAAIAAAAAQvln6tsAPUdEzHgli2+mgXI4pr8I4Q9K+LIsYX/LIa+cMSrT3EhjKH80bHB1jqdVJEn4gsXYKfwuGs3g0WNuboK4urIKl0IdmphBM/XVCyz"}	2025-05-25 21:50:55.406+00	2025-05-25 21:50:55.406+00	\N
01JW7G0MXHW41KP0C54NG3VJ9Q	krystian+2@ogonowski.it	emailpass	authid_01JW7G0MXJ5TQK5M82BW6ZNJ1M	\N	{"password": "c2NyeXB0AA8AAAAIAAAAAfzMta3HhqHsi+z32xnw7EAQ5ZLj9JtP8+5b5nbeyy7FJkQVe4JvKkagZ6RJJyx18pXUf/4KiCBiPfA/S6+ycpITS9105sa8tha03E+iGLUC"}	2025-05-26 23:49:29.138+00	2025-05-26 23:49:29.138+00	\N
\.


ALTER TABLE public.provider_identity ENABLE TRIGGER ALL;

--
-- Data for Name: publishable_api_key_sales_channel; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.publishable_api_key_sales_channel DISABLE TRIGGER ALL;

COPY public.publishable_api_key_sales_channel (publishable_key_id, sales_channel_id, id, created_at, updated_at, deleted_at) FROM stdin;
apk_01JW5J875C0V8M3NNYK10YTM6T	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	pksc_01JWBZ0F9914XDB6Y3DRN8KG2A	2025-05-28 17:28:29.735779+00	2025-05-28 17:28:29.735779+00	\N
\.


ALTER TABLE public.publishable_api_key_sales_channel ENABLE TRIGGER ALL;

--
-- Data for Name: refund; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.refund DISABLE TRIGGER ALL;

COPY public.refund (id, amount, raw_amount, payment_id, created_at, updated_at, deleted_at, created_by, metadata, refund_reason_id, note) FROM stdin;
\.


ALTER TABLE public.refund ENABLE TRIGGER ALL;

--
-- Data for Name: refund_reason; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.refund_reason DISABLE TRIGGER ALL;

COPY public.refund_reason (id, label, description, metadata, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.refund_reason ENABLE TRIGGER ALL;

--
-- Data for Name: region; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.region DISABLE TRIGGER ALL;

COPY public.region (id, name, currency_code, metadata, created_at, updated_at, deleted_at, automatic_taxes) FROM stdin;
reg_01JW4Q18JBJG1A7QSB8V53GQMW	Poland	eur	\N	2025-05-25 21:54:26.005+00	2025-05-25 21:54:26.005+00	\N	t
\.


ALTER TABLE public.region ENABLE TRIGGER ALL;

--
-- Data for Name: region_country; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.region_country DISABLE TRIGGER ALL;

COPY public.region_country (iso_2, iso_3, num_code, name, display_name, region_id, metadata, created_at, updated_at, deleted_at) FROM stdin;
af	afg	004	AFGHANISTAN	Afghanistan	\N	\N	2025-05-25 21:37:16.693+00	2025-05-25 21:37:16.693+00	\N
al	alb	008	ALBANIA	Albania	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
dz	dza	012	ALGERIA	Algeria	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
as	asm	016	AMERICAN SAMOA	American Samoa	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ad	and	020	ANDORRA	Andorra	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ao	ago	024	ANGOLA	Angola	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ai	aia	660	ANGUILLA	Anguilla	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
aq	ata	010	ANTARCTICA	Antarctica	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ag	atg	028	ANTIGUA AND BARBUDA	Antigua and Barbuda	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ar	arg	032	ARGENTINA	Argentina	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
am	arm	051	ARMENIA	Armenia	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
aw	abw	533	ARUBA	Aruba	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
au	aus	036	AUSTRALIA	Australia	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
at	aut	040	AUSTRIA	Austria	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
az	aze	031	AZERBAIJAN	Azerbaijan	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bs	bhs	044	BAHAMAS	Bahamas	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bh	bhr	048	BAHRAIN	Bahrain	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bd	bgd	050	BANGLADESH	Bangladesh	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bb	brb	052	BARBADOS	Barbados	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
by	blr	112	BELARUS	Belarus	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
be	bel	056	BELGIUM	Belgium	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bz	blz	084	BELIZE	Belize	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bj	ben	204	BENIN	Benin	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bm	bmu	060	BERMUDA	Bermuda	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bt	btn	064	BHUTAN	Bhutan	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bo	bol	068	BOLIVIA	Bolivia	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bq	bes	535	BONAIRE, SINT EUSTATIUS AND SABA	Bonaire, Sint Eustatius and Saba	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ba	bih	070	BOSNIA AND HERZEGOVINA	Bosnia and Herzegovina	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bw	bwa	072	BOTSWANA	Botswana	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bv	bvd	074	BOUVET ISLAND	Bouvet Island	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
br	bra	076	BRAZIL	Brazil	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
io	iot	086	BRITISH INDIAN OCEAN TERRITORY	British Indian Ocean Territory	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bn	brn	096	BRUNEI DARUSSALAM	Brunei Darussalam	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bg	bgr	100	BULGARIA	Bulgaria	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bf	bfa	854	BURKINA FASO	Burkina Faso	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
bi	bdi	108	BURUNDI	Burundi	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
kh	khm	116	CAMBODIA	Cambodia	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cm	cmr	120	CAMEROON	Cameroon	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ca	can	124	CANADA	Canada	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cv	cpv	132	CAPE VERDE	Cape Verde	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ky	cym	136	CAYMAN ISLANDS	Cayman Islands	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cf	caf	140	CENTRAL AFRICAN REPUBLIC	Central African Republic	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
td	tcd	148	CHAD	Chad	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cl	chl	152	CHILE	Chile	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cn	chn	156	CHINA	China	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cx	cxr	162	CHRISTMAS ISLAND	Christmas Island	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cc	cck	166	COCOS (KEELING) ISLANDS	Cocos (Keeling) Islands	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
co	col	170	COLOMBIA	Colombia	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
km	com	174	COMOROS	Comoros	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cg	cog	178	CONGO	Congo	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cd	cod	180	CONGO, THE DEMOCRATIC REPUBLIC OF THE	Congo, the Democratic Republic of the	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ck	cok	184	COOK ISLANDS	Cook Islands	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cr	cri	188	COSTA RICA	Costa Rica	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
ci	civ	384	COTE D'IVOIRE	Cote D'Ivoire	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
hr	hrv	191	CROATIA	Croatia	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cu	cub	192	CUBA	Cuba	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cw	cuw	531	CURAÇAO	Curaçao	\N	\N	2025-05-25 21:37:16.694+00	2025-05-25 21:37:16.694+00	\N
cy	cyp	196	CYPRUS	Cyprus	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
cz	cze	203	CZECH REPUBLIC	Czech Republic	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
dk	dnk	208	DENMARK	Denmark	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
dj	dji	262	DJIBOUTI	Djibouti	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
dm	dma	212	DOMINICA	Dominica	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
do	dom	214	DOMINICAN REPUBLIC	Dominican Republic	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ec	ecu	218	ECUADOR	Ecuador	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
eg	egy	818	EGYPT	Egypt	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
sv	slv	222	EL SALVADOR	El Salvador	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gq	gnq	226	EQUATORIAL GUINEA	Equatorial Guinea	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
er	eri	232	ERITREA	Eritrea	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ee	est	233	ESTONIA	Estonia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
et	eth	231	ETHIOPIA	Ethiopia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
fk	flk	238	FALKLAND ISLANDS (MALVINAS)	Falkland Islands (Malvinas)	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
fo	fro	234	FAROE ISLANDS	Faroe Islands	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
fj	fji	242	FIJI	Fiji	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
fi	fin	246	FINLAND	Finland	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
fr	fra	250	FRANCE	France	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gf	guf	254	FRENCH GUIANA	French Guiana	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
pf	pyf	258	FRENCH POLYNESIA	French Polynesia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
tf	atf	260	FRENCH SOUTHERN TERRITORIES	French Southern Territories	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ga	gab	266	GABON	Gabon	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gm	gmb	270	GAMBIA	Gambia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ge	geo	268	GEORGIA	Georgia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
de	deu	276	GERMANY	Germany	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gh	gha	288	GHANA	Ghana	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gi	gib	292	GIBRALTAR	Gibraltar	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gr	grc	300	GREECE	Greece	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gl	grl	304	GREENLAND	Greenland	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gd	grd	308	GRENADA	Grenada	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gp	glp	312	GUADELOUPE	Guadeloupe	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gu	gum	316	GUAM	Guam	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gt	gtm	320	GUATEMALA	Guatemala	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gg	ggy	831	GUERNSEY	Guernsey	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gn	gin	324	GUINEA	Guinea	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gw	gnb	624	GUINEA-BISSAU	Guinea-Bissau	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
gy	guy	328	GUYANA	Guyana	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ht	hti	332	HAITI	Haiti	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
hm	hmd	334	HEARD ISLAND AND MCDONALD ISLANDS	Heard Island And Mcdonald Islands	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
va	vat	336	HOLY SEE (VATICAN CITY STATE)	Holy See (Vatican City State)	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
hn	hnd	340	HONDURAS	Honduras	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
hk	hkg	344	HONG KONG	Hong Kong	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
hu	hun	348	HUNGARY	Hungary	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
is	isl	352	ICELAND	Iceland	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
in	ind	356	INDIA	India	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
id	idn	360	INDONESIA	Indonesia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ir	irn	364	IRAN, ISLAMIC REPUBLIC OF	Iran, Islamic Republic of	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
iq	irq	368	IRAQ	Iraq	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ie	irl	372	IRELAND	Ireland	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
im	imn	833	ISLE OF MAN	Isle Of Man	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
il	isr	376	ISRAEL	Israel	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
it	ita	380	ITALY	Italy	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
jm	jam	388	JAMAICA	Jamaica	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
jp	jpn	392	JAPAN	Japan	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
je	jey	832	JERSEY	Jersey	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
jo	jor	400	JORDAN	Jordan	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
kz	kaz	398	KAZAKHSTAN	Kazakhstan	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ke	ken	404	KENYA	Kenya	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ki	kir	296	KIRIBATI	Kiribati	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
kp	prk	408	KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF	Korea, Democratic People's Republic of	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
kr	kor	410	KOREA, REPUBLIC OF	Korea, Republic of	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
xk	xkx	900	KOSOVO	Kosovo	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
kw	kwt	414	KUWAIT	Kuwait	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
kg	kgz	417	KYRGYZSTAN	Kyrgyzstan	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
la	lao	418	LAO PEOPLE'S DEMOCRATIC REPUBLIC	Lao People's Democratic Republic	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
lv	lva	428	LATVIA	Latvia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
lb	lbn	422	LEBANON	Lebanon	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ls	lso	426	LESOTHO	Lesotho	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
lr	lbr	430	LIBERIA	Liberia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ly	lby	434	LIBYA	Libya	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
li	lie	438	LIECHTENSTEIN	Liechtenstein	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
lt	ltu	440	LITHUANIA	Lithuania	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
lu	lux	442	LUXEMBOURG	Luxembourg	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mo	mac	446	MACAO	Macao	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mg	mdg	450	MADAGASCAR	Madagascar	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mw	mwi	454	MALAWI	Malawi	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
my	mys	458	MALAYSIA	Malaysia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mv	mdv	462	MALDIVES	Maldives	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ml	mli	466	MALI	Mali	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mt	mlt	470	MALTA	Malta	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mh	mhl	584	MARSHALL ISLANDS	Marshall Islands	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mq	mtq	474	MARTINIQUE	Martinique	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mr	mrt	478	MAURITANIA	Mauritania	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mu	mus	480	MAURITIUS	Mauritius	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
yt	myt	175	MAYOTTE	Mayotte	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mx	mex	484	MEXICO	Mexico	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
fm	fsm	583	MICRONESIA, FEDERATED STATES OF	Micronesia, Federated States of	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
md	mda	498	MOLDOVA, REPUBLIC OF	Moldova, Republic of	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mc	mco	492	MONACO	Monaco	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mn	mng	496	MONGOLIA	Mongolia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
me	mne	499	MONTENEGRO	Montenegro	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ms	msr	500	MONTSERRAT	Montserrat	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ma	mar	504	MOROCCO	Morocco	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mz	moz	508	MOZAMBIQUE	Mozambique	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mm	mmr	104	MYANMAR	Myanmar	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
na	nam	516	NAMIBIA	Namibia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
nr	nru	520	NAURU	Nauru	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
np	npl	524	NEPAL	Nepal	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
nl	nld	528	NETHERLANDS	Netherlands	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
nc	ncl	540	NEW CALEDONIA	New Caledonia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
nz	nzl	554	NEW ZEALAND	New Zealand	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ni	nic	558	NICARAGUA	Nicaragua	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ne	ner	562	NIGER	Niger	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
ng	nga	566	NIGERIA	Nigeria	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
nu	niu	570	NIUE	Niue	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
nf	nfk	574	NORFOLK ISLAND	Norfolk Island	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mk	mkd	807	NORTH MACEDONIA	North Macedonia	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
mp	mnp	580	NORTHERN MARIANA ISLANDS	Northern Mariana Islands	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
no	nor	578	NORWAY	Norway	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
om	omn	512	OMAN	Oman	\N	\N	2025-05-25 21:37:16.695+00	2025-05-25 21:37:16.695+00	\N
pk	pak	586	PAKISTAN	Pakistan	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
pw	plw	585	PALAU	Palau	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ps	pse	275	PALESTINIAN TERRITORY, OCCUPIED	Palestinian Territory, Occupied	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
pa	pan	591	PANAMA	Panama	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
pg	png	598	PAPUA NEW GUINEA	Papua New Guinea	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
py	pry	600	PARAGUAY	Paraguay	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
pe	per	604	PERU	Peru	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ph	phl	608	PHILIPPINES	Philippines	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
pn	pcn	612	PITCAIRN	Pitcairn	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
pt	prt	620	PORTUGAL	Portugal	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
pr	pri	630	PUERTO RICO	Puerto Rico	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
qa	qat	634	QATAR	Qatar	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
re	reu	638	REUNION	Reunion	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ro	rom	642	ROMANIA	Romania	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ru	rus	643	RUSSIAN FEDERATION	Russian Federation	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
rw	rwa	646	RWANDA	Rwanda	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
bl	blm	652	SAINT BARTHÉLEMY	Saint Barthélemy	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sh	shn	654	SAINT HELENA	Saint Helena	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
kn	kna	659	SAINT KITTS AND NEVIS	Saint Kitts and Nevis	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
lc	lca	662	SAINT LUCIA	Saint Lucia	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
mf	maf	663	SAINT MARTIN (FRENCH PART)	Saint Martin (French part)	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
pm	spm	666	SAINT PIERRE AND MIQUELON	Saint Pierre and Miquelon	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
vc	vct	670	SAINT VINCENT AND THE GRENADINES	Saint Vincent and the Grenadines	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ws	wsm	882	SAMOA	Samoa	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sm	smr	674	SAN MARINO	San Marino	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
st	stp	678	SAO TOME AND PRINCIPE	Sao Tome and Principe	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sa	sau	682	SAUDI ARABIA	Saudi Arabia	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sn	sen	686	SENEGAL	Senegal	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
rs	srb	688	SERBIA	Serbia	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sc	syc	690	SEYCHELLES	Seychelles	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sl	sle	694	SIERRA LEONE	Sierra Leone	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sg	sgp	702	SINGAPORE	Singapore	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sx	sxm	534	SINT MAARTEN	Sint Maarten	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sk	svk	703	SLOVAKIA	Slovakia	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
si	svn	705	SLOVENIA	Slovenia	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sb	slb	090	SOLOMON ISLANDS	Solomon Islands	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
so	som	706	SOMALIA	Somalia	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
za	zaf	710	SOUTH AFRICA	South Africa	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
gs	sgs	239	SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS	South Georgia and the South Sandwich Islands	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ss	ssd	728	SOUTH SUDAN	South Sudan	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
es	esp	724	SPAIN	Spain	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
lk	lka	144	SRI LANKA	Sri Lanka	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sd	sdn	729	SUDAN	Sudan	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sr	sur	740	SURINAME	Suriname	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sj	sjm	744	SVALBARD AND JAN MAYEN	Svalbard and Jan Mayen	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sz	swz	748	SWAZILAND	Swaziland	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
se	swe	752	SWEDEN	Sweden	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ch	che	756	SWITZERLAND	Switzerland	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
sy	syr	760	SYRIAN ARAB REPUBLIC	Syrian Arab Republic	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tw	twn	158	TAIWAN, PROVINCE OF CHINA	Taiwan, Province of China	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tj	tjk	762	TAJIKISTAN	Tajikistan	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tz	tza	834	TANZANIA, UNITED REPUBLIC OF	Tanzania, United Republic of	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
th	tha	764	THAILAND	Thailand	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tl	tls	626	TIMOR LESTE	Timor Leste	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tg	tgo	768	TOGO	Togo	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tk	tkl	772	TOKELAU	Tokelau	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
to	ton	776	TONGA	Tonga	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tt	tto	780	TRINIDAD AND TOBAGO	Trinidad and Tobago	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tn	tun	788	TUNISIA	Tunisia	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tr	tur	792	TURKEY	Turkey	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tm	tkm	795	TURKMENISTAN	Turkmenistan	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tc	tca	796	TURKS AND CAICOS ISLANDS	Turks and Caicos Islands	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
tv	tuv	798	TUVALU	Tuvalu	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ug	uga	800	UGANDA	Uganda	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ua	ukr	804	UKRAINE	Ukraine	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ae	are	784	UNITED ARAB EMIRATES	United Arab Emirates	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
gb	gbr	826	UNITED KINGDOM	United Kingdom	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
us	usa	840	UNITED STATES	United States	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
um	umi	581	UNITED STATES MINOR OUTLYING ISLANDS	United States Minor Outlying Islands	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
uy	ury	858	URUGUAY	Uruguay	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
uz	uzb	860	UZBEKISTAN	Uzbekistan	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
vu	vut	548	VANUATU	Vanuatu	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ve	ven	862	VENEZUELA	Venezuela	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
vn	vnm	704	VIET NAM	Viet Nam	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
vg	vgb	092	VIRGIN ISLANDS, BRITISH	Virgin Islands, British	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
vi	vir	850	VIRGIN ISLANDS, U.S.	Virgin Islands, U.S.	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
wf	wlf	876	WALLIS AND FUTUNA	Wallis and Futuna	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
eh	esh	732	WESTERN SAHARA	Western Sahara	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ye	yem	887	YEMEN	Yemen	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
zm	zmb	894	ZAMBIA	Zambia	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
zw	zwe	716	ZIMBABWE	Zimbabwe	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
ax	ala	248	ÅLAND ISLANDS	Åland Islands	\N	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:37:16.696+00	\N
pl	pol	616	POLAND	Poland	reg_01JW4Q18JBJG1A7QSB8V53GQMW	\N	2025-05-25 21:37:16.696+00	2025-05-25 21:54:26.005+00	\N
\.


ALTER TABLE public.region_country ENABLE TRIGGER ALL;

--
-- Data for Name: region_payment_provider; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.region_payment_provider DISABLE TRIGGER ALL;

COPY public.region_payment_provider (region_id, payment_provider_id, id, created_at, updated_at, deleted_at) FROM stdin;
reg_01JW4Q18JBJG1A7QSB8V53GQMW	pp_system_default	regpp_01JW4Q18KBM4557PX0SJB34001	2025-05-25 21:54:26.02734+00	2025-05-25 21:54:26.02734+00	\N
\.


ALTER TABLE public.region_payment_provider ENABLE TRIGGER ALL;

--
-- Data for Name: reservation_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.reservation_item DISABLE TRIGGER ALL;

COPY public.reservation_item (id, created_at, updated_at, deleted_at, line_item_id, location_id, quantity, external_id, description, created_by, metadata, inventory_item_id, allow_backorder, raw_quantity) FROM stdin;
\.


ALTER TABLE public.reservation_item ENABLE TRIGGER ALL;

--
-- Data for Name: return; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.return DISABLE TRIGGER ALL;

COPY public.return (id, order_id, claim_id, exchange_id, order_version, display_id, status, no_notification, refund_amount, raw_refund_amount, metadata, created_at, updated_at, deleted_at, received_at, canceled_at, location_id, requested_at, created_by) FROM stdin;
\.


ALTER TABLE public.return ENABLE TRIGGER ALL;

--
-- Data for Name: return_fulfillment; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.return_fulfillment DISABLE TRIGGER ALL;

COPY public.return_fulfillment (return_id, fulfillment_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.return_fulfillment ENABLE TRIGGER ALL;

--
-- Data for Name: return_item; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.return_item DISABLE TRIGGER ALL;

COPY public.return_item (id, return_id, reason_id, item_id, quantity, raw_quantity, received_quantity, raw_received_quantity, note, metadata, created_at, updated_at, deleted_at, damaged_quantity, raw_damaged_quantity) FROM stdin;
\.


ALTER TABLE public.return_item ENABLE TRIGGER ALL;

--
-- Data for Name: return_reason; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.return_reason DISABLE TRIGGER ALL;

COPY public.return_reason (id, value, label, description, metadata, parent_return_reason_id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.return_reason ENABLE TRIGGER ALL;

--
-- Data for Name: sales_channel; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.sales_channel DISABLE TRIGGER ALL;

COPY public.sales_channel (id, name, description, is_disabled, metadata, created_at, updated_at, deleted_at) FROM stdin;
sc_01JW4P8MGP2NFT1ESZVEN6CTS9	Default Sales Channel	Created by Medusa	f	\N	2025-05-25 21:40:59.03+00	2025-05-25 21:40:59.03+00	\N
\.


ALTER TABLE public.sales_channel ENABLE TRIGGER ALL;

--
-- Data for Name: sales_channel_stock_location; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.sales_channel_stock_location DISABLE TRIGGER ALL;

COPY public.sales_channel_stock_location (sales_channel_id, stock_location_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.sales_channel_stock_location ENABLE TRIGGER ALL;

--
-- Data for Name: script_migrations; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.script_migrations DISABLE TRIGGER ALL;

COPY public.script_migrations (id, script_name, created_at, finished_at) FROM stdin;
1	migrate-product-shipping-profile.js	2025-05-25 21:37:18.251631+00	2025-05-25 21:37:18.298385+00
2	migrate-tax-region-provider.js	2025-05-25 21:37:18.302797+00	2025-05-25 21:37:18.3171+00
\.


ALTER TABLE public.script_migrations ENABLE TRIGGER ALL;

--
-- Data for Name: shipping_option_price_set; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.shipping_option_price_set DISABLE TRIGGER ALL;

COPY public.shipping_option_price_set (shipping_option_id, price_set_id, id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.shipping_option_price_set ENABLE TRIGGER ALL;

--
-- Data for Name: shipping_option_rule; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.shipping_option_rule DISABLE TRIGGER ALL;

COPY public.shipping_option_rule (id, attribute, operator, value, shipping_option_id, created_at, updated_at, deleted_at) FROM stdin;
\.


ALTER TABLE public.shipping_option_rule ENABLE TRIGGER ALL;

--
-- Data for Name: stock_location_address; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.stock_location_address DISABLE TRIGGER ALL;

COPY public.stock_location_address (id, created_at, updated_at, deleted_at, address_1, address_2, company, city, country_code, phone, province, postal_code, metadata) FROM stdin;
laddr_01JW4Q38MY4YJAQW1RRY21C4DP	2025-05-25 21:55:31.614+00	2025-05-25 21:55:31.614+00	\N	Wroclaw Main			Wroclaw	pl				\N
\.


ALTER TABLE public.stock_location_address ENABLE TRIGGER ALL;

--
-- Data for Name: stock_location; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.stock_location DISABLE TRIGGER ALL;

COPY public.stock_location (id, created_at, updated_at, deleted_at, name, address_id, metadata) FROM stdin;
sloc_01JW4Q38MYC64VZSJYX0A2P49P	2025-05-25 21:55:31.614+00	2025-05-25 21:55:31.614+00	\N	WRO	laddr_01JW4Q38MY4YJAQW1RRY21C4DP	\N
\.


ALTER TABLE public.stock_location ENABLE TRIGGER ALL;

--
-- Data for Name: store; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.store DISABLE TRIGGER ALL;

COPY public.store (id, name, default_sales_channel_id, default_region_id, default_location_id, metadata, created_at, updated_at, deleted_at) FROM stdin;
store_01JW4P8MJJA2R5D34E5VGX9JR5	PrintAid	sc_01JW4P8MGP2NFT1ESZVEN6CTS9	reg_01JW4Q18JBJG1A7QSB8V53GQMW	sloc_01JW4Q38MYC64VZSJYX0A2P49P	\N	2025-05-25 21:40:59.087058+00	2025-05-25 21:40:59.087058+00	\N
\.


ALTER TABLE public.store ENABLE TRIGGER ALL;

--
-- Data for Name: store_currency; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.store_currency DISABLE TRIGGER ALL;

COPY public.store_currency (id, currency_code, is_default, store_id, created_at, updated_at, deleted_at) FROM stdin;
stocur_01JW4Q4JQ44ZXNWA1W7VQFK3J6	pln	t	store_01JW4P8MJJA2R5D34E5VGX9JR5	2025-05-25 21:56:14.687769+00	2025-05-25 21:56:14.687769+00	\N
stocur_01JW4Q4JQ5NBSWGE3PBPQVEPXK	eur	f	store_01JW4P8MJJA2R5D34E5VGX9JR5	2025-05-25 21:56:14.687769+00	2025-05-25 21:56:14.687769+00	\N
\.


ALTER TABLE public.store_currency ENABLE TRIGGER ALL;

--
-- Data for Name: tax_provider; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.tax_provider DISABLE TRIGGER ALL;

COPY public.tax_provider (id, is_enabled, created_at, updated_at, deleted_at) FROM stdin;
tp_system	t	2025-05-25 21:37:16.766+00	2025-05-25 21:37:16.766+00	\N
\.


ALTER TABLE public.tax_provider ENABLE TRIGGER ALL;

--
-- Data for Name: tax_region; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.tax_region DISABLE TRIGGER ALL;

COPY public.tax_region (id, provider_id, country_code, province_code, parent_id, metadata, created_at, updated_at, created_by, deleted_at) FROM stdin;
\.


ALTER TABLE public.tax_region ENABLE TRIGGER ALL;

--
-- Data for Name: tax_rate; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.tax_rate DISABLE TRIGGER ALL;

COPY public.tax_rate (id, rate, code, name, is_default, is_combinable, tax_region_id, metadata, created_at, updated_at, created_by, deleted_at) FROM stdin;
\.


ALTER TABLE public.tax_rate ENABLE TRIGGER ALL;

--
-- Data for Name: tax_rate_rule; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.tax_rate_rule DISABLE TRIGGER ALL;

COPY public.tax_rate_rule (id, tax_rate_id, reference_id, reference, metadata, created_at, updated_at, created_by, deleted_at) FROM stdin;
\.


ALTER TABLE public.tax_rate_rule ENABLE TRIGGER ALL;

--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public."user" DISABLE TRIGGER ALL;

COPY public."user" (id, first_name, last_name, email, avatar_url, metadata, created_at, updated_at, deleted_at) FROM stdin;
user_01JW4PTTSGGRR82ASEKCCCN4WK	Krystian	Og	krystian@ogonowski.it	\N	\N	2025-05-25 21:50:55.28+00	2025-05-25 21:53:47.707+00	\N
user_01JW7G0MSK7W39S8TGP43GE7MS	\N	\N	krystian+2@ogonowski.it	\N	\N	2025-05-26 23:49:29.011+00	2025-05-26 23:49:29.011+00	\N
\.


ALTER TABLE public."user" ENABLE TRIGGER ALL;

--
-- Data for Name: workflow_execution; Type: TABLE DATA; Schema: public; Owner: medusa_user
--

ALTER TABLE public.workflow_execution DISABLE TRIGGER ALL;

COPY public.workflow_execution (id, workflow_id, transaction_id, execution, context, state, created_at, updated_at, deleted_at, retention_time, run_id) FROM stdin;
\.


ALTER TABLE public.workflow_execution ENABLE TRIGGER ALL;

--
-- Name: link_module_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: medusa_user
--

SELECT pg_catalog.setval('public.link_module_migrations_id_seq', 1505, true);


--
-- Name: mikro_orm_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: medusa_user
--

SELECT pg_catalog.setval('public.mikro_orm_migrations_id_seq', 109, true);


--
-- Name: order_change_action_ordering_seq; Type: SEQUENCE SET; Schema: public; Owner: medusa_user
--

SELECT pg_catalog.setval('public.order_change_action_ordering_seq', 1, false);


--
-- Name: order_claim_display_id_seq; Type: SEQUENCE SET; Schema: public; Owner: medusa_user
--

SELECT pg_catalog.setval('public.order_claim_display_id_seq', 1, false);


--
-- Name: order_display_id_seq; Type: SEQUENCE SET; Schema: public; Owner: medusa_user
--

SELECT pg_catalog.setval('public.order_display_id_seq', 1, false);


--
-- Name: order_exchange_display_id_seq; Type: SEQUENCE SET; Schema: public; Owner: medusa_user
--

SELECT pg_catalog.setval('public.order_exchange_display_id_seq', 1, false);


--
-- Name: return_display_id_seq; Type: SEQUENCE SET; Schema: public; Owner: medusa_user
--

SELECT pg_catalog.setval('public.return_display_id_seq', 1, false);


--
-- Name: script_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: medusa_user
--

SELECT pg_catalog.setval('public.script_migrations_id_seq', 2, true);


--
-- PostgreSQL database dump complete
--

