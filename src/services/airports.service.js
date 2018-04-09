import { FLIGHT_BOOKING_SELECTOR_URL } from 'Enums';

export const AiportsService = () => {
  const obj = {
    "routes": {
      "LGW": ["SNN", "ORK", "BFS", "ALC", "SVQ", "KUN", "DUB"],
      "HHN": ["FEZ", "VLC", "CAG", "KGS", "PSA", "CFU", "LPA", "SCQ", "FAO", "SUF", "TPS", "REU", "TMP", "RAK", "AHO", "BGY", "GRO", "EDI", "SDR", "RIX", "PSR", "STN", "NDR", "ZAD", "KIR", "CIA", "PMI", "DUB", "LIS", "OPO", "ACE", "AGP", "VNO", "OLB", "PDV", "NQY", "ALC", "CHQ", "CIY", "IBZ", "TSF", "PUY", "XRY", "FUE", "BRI", "SKG", "TSR", "MPL", "TFS"],
      "VLC": ["BLQ", "WMI", "HHN", "PSA", "CIA", "PMI", "DUB", "OPO", "ACE", "TRS", "LPA", "SCQ", "TRN", "EMA", "BVA", "IBZ", "TSF", "MAH", "MAN", "MLA", "BGY", "BRU", "CRA", "BRI", "CGN", "BRS", "SDR", "NRN", "SXF", "STN", "CRL", "TFS", "MRS"],
      "PGF": ["CRL", "STN", "BHX"],
      "TLL": ["RYG", "GRO", "NRN", "MAN", "BRE", "STN", "DUB", "BGY"],
      "AAR": ["STN"],
      "NOC": ["LPL", "GRO", "ACE", "AGP", "LTN", "BRS", "FAO", "EMA", "ALC", "STN", "TFS", "BGY"],
      "KGS": ["BLQ", "LPL", "BRI", "HHN", "PSA", "STN", "KRK", "KUN", "FCO", "BGY"],
      "TLS": ["MAD", "FEZ", "WMI", "SXF", "STN", "MLA", "CRL"],
      "CFU": ["HHN", "WMI", "BLL", "PSA", "CIA", "LBA", "FCO", "BHX", "KTW", "EMA", "PIK", "ATH", "EIN", "BUD", "TSF", "POZ", "MAN", "BGY", "BTS", "EDI", "CGN", "NRN", "BRE", "CRL", "STN", "RZE"],
      "KTW": ["ALC", "STN", "CHQ", "CFU", "DUB", "BHX"],
      "GDN": ["RYG", "WMI", "PSA", "MAN", "WAW", "CIA", "LBA", "MLA", "WRO", "KRK", "NCL", "DUB", "BGY", "BHX", "ORK", "EDI", "NYO", "BRS", "BFS", "ALC", "STN"],
      "FAO": ["HHN", "NOC", "KIR", "LBA", "DUB", "BHX", "BOH", "FMM", "SNN", "OPO", "ORK", "NYO", "EMA", "PIK", "MST", "BVA", "LPL", "RYG", "EIN", "DTM", "LDY", "MAN", "EDI", "CGN", "BRS", "NRN", "BRE", "STN", "CRL"],
      "VLL": ["ACE", "BCN"],
      "CFE": ["OPO", "STN"],
      "JTR": ["ATH"],
      "CWL": ["SNN", "DUB", "TFS"],
      "TMP": ["BUD", "AGP", "HHN", "BRE", "ALC", "STN", "BGY"],
      "RAK": ["EIN", "MAD", "HHN", "TUF", "LTN", "PSA", "CIA", "DUB", "BGY", "GRO", "PIS", "DLE", "NRN", "XCR", "SVQ", "STN", "CRL", "BCN", "BVA", "MRS"],
      "BSL": ["STN", "DUB"],
      "BRU": ["MAD", "TSF", "IBZ", "VLC", "LCA", "PMI", "MLA", "VRN", "MXP", "FCO", "LIS", "DUB", "HAM", "BTS", "OPO", "AGP", "SXF", "ALC", "BCN"],
      "PFO": ["ATH", "SKG", "NYO", "GPA", "CIA", "STN", "KRK", "CHQ", "CRL", "KUN"],
      "BRQ": ["STN"],
      "FSC": ["CRL", "BVA"],
      "CGN": ["MAD", "WMI", "VLC", "CIA", "SOF", "PMI", "MLA", "CFU", "DUB", "BGY", "OPO", "AGP", "LPA", "CPH", "FAO", "SXF", "RIX", "ALC", "STN", "TFS", "BCN"],
      "BRS": ["BLQ", "BZR", "WMI", "VLC", "NOC", "CDT", "PMI", "DUB", "ACE", "AGP", "LIG", "LPA", "GDN", "FAO", "EGC", "ALC", "BOD", "CHQ", "BUD", "REU", "IBZ", "TSF", "POZ", "KRK", "MLA", "WRO", "BGY", "GRO", "RZE", "KUN", "TFS"],
      "DLE": ["OPO", "FEZ", "RAK", "LIS"],
      "SXF": ["BLQ", "VLC", "ZAD", "PSA", "TLS", "CIA", "PMI", "LIS", "DUB", "OTP", "OPO", "SNN", "VNO", "ACE", "AGP", "LPA", "PMO", "BFS", "TRN", "EMA", "ALC", "INI", "BUD", "ATH", "MAD", "TSF", "MAN", "SOF", "MLA", "TGD", "BGY", "BRU", "BTS", "FUE", "BRI", "GLA", "CTA", "SKG", "CGN", "SDR", "TSR", "RIX", "SVQ", "CRL", "STN", "RZE", "BCN", "TFS"],
      "KUN": ["LGW", "RYG", "VDA", "CAG", "LTN", "KGS", "PMI", "MLA", "DUB", "BHX", "PFO", "SNN", "EDI", "BRS", "CPH", "ALC", "STN", "TPS", "RHO"],
      "BCN": ["TFN", "NDR", "BLQ", "FEZ", "WMI", "VGO", "CIA", "PMI", "FCO", "DUB", "BHX", "OPO", "VNO", "AGP", "ACE", "LPA", "SCQ", "NYO", "TRN", "EMA", "PIK", "VLL", "BVA", "BUD", "LPL", "TSF", "IBZ", "RAK", "MAH", "MAN", "XRY", "HAM", "BGY", "BRU", "FUE", "EDI", "CGN", "SDR", "SXF", "SVQ", "STN", "CRL", "TFS"],
      "BVE": ["STN"],
      "BDS": ["BLQ", "EIN", "TSF", "PEG", "MAN", "PSA", "CIA", "FCO", "BGY", "GRO", "NYO", "TRN", "CRL", "STN", "BVA"],
      "CDT": ["BRS", "SOF", "STN"],
      "LIS": ["EIN", "WMI", "HHN", "MAN", "PSA", "CIA", "FCO", "PDL", "DUB", "HAM", "BGY", "BRU", "OPO", "DLE", "BRE", "STN", "BVA", "MRS"],
      "OTP": ["BLQ", "ATH", "MAD", "TSR", "SXF", "CIA", "CRL", "STN", "MXP", "DUB", "BGY"],
      "ACE": ["BLQ", "VLC", "HHN", "NOC", "LBA", "FCO", "DUB", "BHX", "SNN", "ZAZ", "ORK", "SCQ", "BFS", "EMA", "PIK", "BVA", "VLL", "LPL", "EIN", "MAD", "LTN", "MAN", "NCL", "BGY", "GLA", "EDI", "BRS", "SDR", "NRN", "SVQ", "CRL", "STN", "BCN"],
      "LIG": ["LPL", "BRS", "MAN", "EMA", "LBA", "STN"],
      "PIS": ["OPO", "SNN", "EDI", "RAK", "STN", "DUB", "MRS"],
      "LIL": ["OPO", "DUB", "MRS"],
      "NQY": ["HHN", "ALC"],
      "EMA": ["WMI", "VLC", "NOC", "PSA", "CIA", "PMI", "CFU", "DUB", "CCF", "AGP", "ACE", "LIG", "LPA", "FAO", "EGC", "ALC", "DNR", "CHQ", "TSF", "IBZ", "LRH", "MAH", "MLA", "WRO", "KRK", "BGY", "LCJ", "FUE", "SXF", "RIX", "MJV", "RZE", "BCN", "TFS", "RHO"],
      "OUD": ["NRN", "CRL", "BVA", "MRS"],
      "PIK": ["REU", "IBZ", "PSA", "CIA", "PMI", "MLA", "CFU", "FUE", "AGP", "ACE", "LPA", "FAO", "ALC", "MJV", "BCN", "TFS"],
      "BVA": ["NDR", "BLQ", "BZR", "TNG", "FEZ", "WMI", "VLC", "BDS", "CAG", "ZAD", "PSA", "CIA", "PMI", "LIS", "DUB", "SNN", "OPO", "GOT", "ACE", "VNO", "AGP", "ZAZ", "PMO", "NYO", "FAO", "ALC", "OUD", "TPS", "BUD", "RYG", "MAD", "TSF", "RAK", "MAN", "WRO", "KRK", "AHO", "BGY", "BTS", "GRO", "BRI", "SKG", "FSC", "PSR", "RBA", "SVQ", "TFS", "BCN"],
      "INI": ["SXF"],
      "ATH": ["BLQ", "BUD", "WMI", "CIA", "SOF", "MLA", "CFU", "OTP", "BGY", "JMK", "PFO", "BTS", "SKG", "SXF", "CHQ", "STN", "CRL", "RHO", "JTR"],
      "BUD": ["ATH", "MAD", "TSF", "TMP", "VDA", "BLL", "NUE", "MAN", "PSA", "CIA", "MLA", "CFU", "DUB", "BGY", "AGP", "LPA", "BRS", "CPH", "CRL", "STN", "BCN", "BVA"],
      "BES": ["MRS"],
      "CUF": ["CAG", "TPS", "AHO"],
      "MLA": ["BLQ", "VLC", "BLL", "PSA", "TLS", "CIA", "LBA", "FCO", "DUB", "BHX", "BOH", "VNO", "GOT", "GDN", "NYO", "TRN", "EMA", "PIK", "TPS", "ATH", "BUD", "EIN", "LPL", "RYG", "MAD", "TSF", "NUE", "POZ", "LTN", "MAN", "FKB", "WRO", "KRK", "BGY", "BRU", "GRO", "EDI", "BRI", "CGN", "BRS", "NRN", "SXF", "STN", "KUN", "MRS"],
      "SZZ": ["RYG", "LPL", "STN", "DUB"],
      "BTS": ["ATH", "LPL", "MAD", "VDA", "LTN", "MAN", "CIA", "PMI", "AHO", "CFU", "DUB", "BGY", "BHX", "BRU", "GRO", "AGP", "OLB", "EDI", "SXF", "STN", "CRL", "TPS", "BVA"],
      "FUE": ["LPL", "MAD", "WMI", "HHN", "LTN", "MAN", "PSA", "LBA", "DUB", "BHX", "BGY", "SNN", "ORK", "EDI", "NRN", "BRE", "EMA", "CRL", "STN", "PIK", "BCN"],
      "SKG": ["BLQ", "ATH", "RYG", "WMI", "HHN", "PSA", "CIA", "FKB", "BGY", "PFO", "GRO", "NYO", "NRN", "BRE", "STN", "CHQ", "CRL", "BVA"],
      "SZG": ["STN", "DUB"],
      "MXP": ["BRU", "CIY", "OPO", "LPA", "CTA", "SOF", "SVQ", "STN", "OTP"],
      "SCQ": ["MAD", "VLC", "HHN", "PMI", "BGY", "AGP", "ACE", "LPA", "ALC", "SVQ", "STN", "BCN", "TFS"],
      "BFS": ["LGW", "ACE", "AGP", "WMI", "GDN", "SXF", "ALC", "WRO", "KRK", "TFS", "BGY"],
      "SUF": ["BLQ", "TSF", "HHN", "NRN", "PSA", "CIA", "FKB", "STN", "CRL", "FCO", "BGY"],
      "STR": ["MAN"],
      "WAW": ["GDN", "WRO"],
      "RJK": ["RYG", "NYO", "CRL", "STN"],
      "BGY": ["CRV", "FEZ", "WMI", "HHN", "VLC", "TLL", "CAG", "NOC", "KGS", "CFU", "PRG", "GOT", "ZAZ", "ORK", "LPA", "SCQ", "GDN", "BFS", "SUF", "TPS", "TMP", "RAK", "KRK", "AHO", "HAM", "CGN", "CTA", "BRS", "SDR", "CPH", "NRN", "RIX", "SXF", "PSR", "STN", "BCN", "BDS", "BLL", "LDE", "PMI", "LIS", "DUB", "OTP", "OPO", "VNO", "ACE", "AGP", "PMO", "NYO", "EMA", "ALC", "CHQ", "BVA", "CIY", "ATH", "BUD", "RYG", "EIN", "MAD", "IBZ", "LPP", "NUE", "MAN", "WRO", "MLA", "BTS", "EFL", "FUE", "KLX", "BRI", "SKG", "TSR", "BRE", "SVQ", "CRL", "TFS", "RHO"],
      "JMK": ["ATH"],
      "SDR": ["VLC", "HHN", "CIA", "PMI", "DUB", "BGY", "AGP", "ACE", "LPA", "EDI", "NRN", "SXF", "SVQ", "STN", "CRL", "BCN", "TFS"],
      "RIX": ["RYG", "HHN", "MAN", "LBA", "DUB", "BGY", "GLA", "CGN", "NRN", "BRE", "EMA", "SXF", "STN", "CRL"],
      "MJV": ["BOH", "EIN", "LTN", "MAN", "EMA", "LBA", "STN", "PIK", "DUB", "BHX"],
      "STN": ["HHN", "VLC", "TLL", "PGF", "AAR", "NOC", "KGS", "TLS", "CFU", "GOT", "ZAZ", "LPA", "KTW", "GDN", "FAO", "CFE", "REU", "DTM", "GOA", "TMP", "TUF", "RAK", "POZ", "HAU", "FKB", "AHO", "BSL", "PFO", "EDI", "LNZ", "BRQ", "CGN", "SXF", "KUN", "BCN", "GNB", "BLQ", "BVE", "BDS", "BLL", "CDT", "VRN", "LIS", "DUB", "TRF", "OTP", "FMM", "TRS", "ACE", "OLB", "LIG", "PIS", "NYO", "TRN", "EGC", "ALC", "ATH", "BUD", "RYG", "TSF", "XRY", "VST", "MLA", "WRO", "SZZ", "BTS", "EFL", "FUE", "SKG", "TSR", "SZG", "RZE", "RHO", "FEZ", "WMI", "PSA", "MXP", "PRG", "ORK", "SCQ", "SUF", "DNR", "BOD", "LRH", "RJK", "KRK", "BGY", "DOL", "LCJ", "GRO", "SDR", "OSR", "NRN", "RIX", "RBA", "PSR", "MJV", "OSI", "MRS", "RDZ", "ZAD", "PEG", "KIR", "LDE", "CIA", "SXB", "PMI", "FCO", "CCF", "PMF", "OPO", "SNN", "VNO", "LUZ", "AGP", "PMO", "BZG", "PDV", "CHQ", "CIY", "EIN", "MAD", "IBZ", "PUY", "NUE", "LDY", "EBU", "SOF", "PDL", "TGD", "PLQ", "SFT", "AOI", "GLA", "BIQ", "BRI", "LEJ", "LEI", "BRE", "SVQ", "TFS"],
      "TFN": ["MAD", "BCN"],
      "BZR": ["RYG", "EDI", "NYO", "LTN", "BRS", "NRN", "MAN", "BVA"],
      "ZAD": ["RYG", "HHN", "MAN", "FKB", "DUB", "GOT", "NYO", "NRN", "SXF", "CRL", "STN", "BVA", "MRS"],
      "KIR": ["HHN", "LTN", "FAO", "ALC", "STN"],
      "CIA": ["CRV", "FEZ", "HHN", "VLC", "WMI", "CAG", "CFU", "PRG", "GOT", "GDN", "SUF", "BOD", "TPS", "POZ", "RAK", "KRK", "FKB", "AHO", "PFO", "EDI", "CGN", "SDR", "CPH", "NRN", "SXF", "RBA", "STN", "BCN", "MRS", "BDS", "BLL", "PMI", "DUB", "LIS", "OTP", "FMM", "OPO", "VNO", "AGP", "PMO", "NYO", "EMA", "ALC", "CHQ", "PIK", "BVA", "EIN", "BUD", "ATH", "MAD", "IBZ", "NUE", "MAN", "SOF", "MLA", "WRO", "BTS", "BRI", "SKG", "CRL"],
      "PMI": ["WMI", "HHN", "VLC", "LBA", "BOH", "GOT", "ORK", "SCQ", "REU", "DTM", "POZ", "FKB", "KRK", "BGY", "HAM", "BRU", "GRO", "EDI", "CGN", "BRS", "SDR", "NRN", "SXF", "STN", "KUN", "BCN", "MRS", "BLQ", "BLL", "CIA", "DUB", "BHX", "FMM", "SNN", "OPO", "AGP", "NYO", "EMA", "PIK", "BVA", "RYG", "LPL", "EIN", "MAD", "MAN", "BTS", "BRE", "SVQ", "CRL"],
      "SXB": ["OPO", "STN"],
      "PMF": ["CAG", "STN", "TPS"],
      "BHX": ["WMI", "PGF", "PMI", "VRN", "DUB", "CFU", "ACE", "AGP", "VNO", "LPA", "KTW", "BZG", "GDN", "FAO", "ALC", "MAD", "IBZ", "SOF", "MLA", "KRK", "BTS", "FUE", "MJV", "KUN", "TFS", "BCN"],
      "AGP": ["WMI", "HHN", "NOC", "LBA", "BOH", "GOT", "ORK", "SCQ", "BFS", "DTM", "TMP", "HAU", "KRK", "FKB", "NCL", "HAM", "BGY", "BRU", "EDI", "CGN", "BRS", "SDR", "CPH", "NRN", "SXF", "STN", "BCN", "MRS", "BLQ", "BLL", "CIA", "PMI", "FCO", "DUB", "TRF", "BHX", "FMM", "SNN", "NYO", "EMA", "PIK", "FMO", "BVA", "BUD", "RYG", "LPL", "EIN", "IBZ", "TSF", "NUE", "MAN", "VST", "WRO", "BTS", "GLA", "BRE", "CRL"],
      "VNO": ["LPL", "RYG", "MAD", "HHN", "LTN", "CIA", "MLA", "DUB", "BHX", "BGY", "BRE", "CHQ", "CRL", "STN", "BCN", "BVA"],
      "PMO": ["BLQ", "MAD", "TSF", "PSA", "CIA", "VRN", "DUB", "FCO", "BGY", "FMM", "NRN", "TRN", "SXF", "SVQ", "STN", "BVA", "MRS"],
      "BZG": ["GLA", "NRN", "STN", "DUB", "BHX"],
      "CHQ": ["BLQ", "WMI", "HHN", "BLL", "PSA", "CIA", "LBA", "FCO", "DUB", "FMM", "VNO", "KTW", "NYO", "EMA", "ATH", "EIN", "RYG", "TSF", "MAN", "WRO", "BGY", "PFO", "GLA", "SKG", "BRS", "NRN", "BRE", "CRL", "STN", "MRS"],
      "AGA": ["NRN", "CRL", "MRS"],
      "CIY": ["HHN", "NRN", "TRN", "PSA", "CRL", "STN", "MXP", "FCO", "DUB", "BGY"],
      "EIN": ["FEZ", "WMI", "BDS", "PSA", "CIA", "PMI", "LIS", "CFU", "CCF", "DUB", "OPO", "AGP", "ACE", "OLB", "LPA", "NYO", "TRN", "FAO", "ALC", "CHQ", "TPS", "REU", "MAD", "TSF", "IBZ", "RAK", "MAN", "SOF", "KRK", "MLA", "AHO", "BGY", "GRO", "CTA", "MJV", "SVQ", "STN", "TFS", "MRS"],
      "TGD": ["SXF", "STN", "CRL"],
      "PLQ": ["STN"],
      "SFT": ["STN"],
      "BIQ": ["NYO", "STN", "CRL", "DUB"],
      "GLA": ["WMI", "LDY", "SOF", "WRO", "DUB", "CCF", "ACE", "AGP", "LPA", "BZG", "RIX", "SXF", "ALC", "STN", "CHQ"],
      "SVQ": ["BLQ", "LGW", "EIN", "RAK", "PSA", "PMI", "FCO", "MXP", "DUB", "BGY", "ACE", "LPA", "PMO", "SCQ", "SDR", "BOD", "STN", "CRL", "TFS", "BVA", "BCN", "MRS"],
      "TFS": ["BLQ", "WMI", "VLC", "HHN", "BLL", "NOC", "PSA", "LBA", "DUB", "BHX", "BOH", "FMM", "SNN", "OPO", "ORK", "SCQ", "NYO", "BFS", "EMA", "PIK", "BVA", "CWL", "EIN", "RYG", "LPL", "MAD", "TSF", "LTN", "MAN", "WRO", "KRK", "FKB", "NCL", "BGY", "LNZ", "EDI", "CGN", "SDR", "BRS", "CPH", "NRN", "BRE", "SXF", "SVQ", "STN", "CRL", "BCN"],
      "GPA": ["PFO"],
      "ZAZ": ["ACE", "CRL", "STN", "BVA", "BGY"],
      "GOT": ["WMI", "ZAD", "PSA", "CIA", "PMI", "MLA", "AHO", "BGY", "AGP", "EDI", "ALC", "STN", "BVA", "MRS"],
      "LPA": ["BLQ", "WMI", "VLC", "HHN", "PSA", "LBA", "MXP", "DUB", "BHX", "BOH", "OPO", "ORK", "SCQ", "NYO", "EMA", "PIK", "BUD", "LPL", "RYG", "EIN", "MAD", "LTN", "MAN", "KRK", "FKB", "BGY", "GLA", "EDI", "CGN", "SDR", "BRS", "NRN", "BRE", "SVQ", "CRL", "STN", "BCN"],
      "REU": ["EIN", "LPL", "ORK", "HHN", "BRS", "PMI", "STN", "CRL", "PIK", "DUB"],
      "GOA": ["BRI", "CAG", "STN", "TPS"],
      "DTM": ["LPL", "OPO", "GRO", "AGP", "FAO", "PMI", "STN", "KRK", "AHO"],
      "TUF": ["OPO", "RAK", "STN", "DUB", "MRS"],
      "POZ": ["GRO", "RYG", "LPL", "EDI", "BRS", "ALC", "CIA", "PMI", "MLA", "STN", "CFU", "DUB"],
      "ZTH": ["CRL"],
      "HAU": ["AGP", "ALC", "STN"],
      "FKB": ["ZAD", "CAG", "CIA", "SOF", "PMI", "MLA", "GRO", "OPO", "AGP", "LPA", "BRI", "SKG", "SUF", "ALC", "STN", "TPS", "TFS"],
      "AHO": ["BLQ", "EIN", "MAD", "TSF", "DTM", "HHN", "PSA", "CUF", "CIA", "DUB", "BGY", "BTS", "FMM", "GRO", "GOT", "AOI", "TRS", "NYO", "TRN", "NRN", "CRL", "STN", "BVA"],
      "HAM": ["MAD", "MAN", "SOF", "PMI", "LIS", "DUB", "BGY", "BRU", "OPO", "AGP", "LPA", "ALC", "STN", "BCN"],
      "LNZ": ["STN", "TFS"],
      "EDI": ["BLQ", "BZR", "WMI", "HHN", "PSA", "CIA", "PMI", "DUB", "CFU", "GOT", "AGP", "ACE", "LPA", "PIS", "GDN", "FAO", "ALC", "BOD", "RYG", "POZ", "KRK", "MLA", "BTS", "FUE", "SDR", "CPH", "NRN", "BRE", "STN", "CRL", "KUN", "BCN", "TFS", "MRS"],
      "CPH": ["BLQ", "BUD", "MAD", "WMI", "LTN", "CIA", "DUB", "BGY", "OPO", "AGP", "EDI", "CGN", "NYO", "ALC", "CRL", "KUN", "TFS"],
      "GNB": ["STN", "DUB"],
      "BLQ": ["WMI", "VLC", "CAG", "BDS", "VGO", "KGS", "PMI", "DUB", "OTP", "OPO", "AGP", "ACE", "LPA", "PMO", "SUF", "ALC", "CHQ", "BOD", "TPS", "BVA", "ATH", "MAD", "IBZ", "MAN", "KRK", "WRO", "MLA", "AHO", "BRI", "EDI", "SKG", "CTA", "BRS", "CPH", "NRN", "SXF", "SVQ", "STN", "CRL", "BCN", "TFS", "RHO"],
      "BLL": ["BUD", "TSF", "PSA", "CIA", "PMI", "MLA", "CFU", "BGY", "GRO", "AGP", "ALC", "CHQ", "STN", "TFS"],
      "VRN": ["BRU", "PMO", "CRL", "STN", "BHX"],
      "DUB": ["LGW", "NTE", "WMI", "VLC", "HHN", "TLL", "VGO", "PSA", "AMS", "LBA", "PRG", "LPA", "KTW", "GDN", "FAO", "BOD", "CWL", "REU", "TUF", "RAK", "LRH", "POZ", "NCE", "KRK", "AHO", "NCL", "HAM", "BSL", "BGY", "BRU", "LCJ", "GRO", "EDI", "CGN", "SDR", "BRS", "CPH", "RIX", "SXF", "MJV", "STN", "KUN", "BCN", "MRS", "GNB", "BLQ", "RDZ", "ZAD", "CIA", "PMI", "LIS", "CCF", "OTP", "BHX", "FMM", "OPO", "VNO", "ACE", "LUZ", "AGP", "OLB", "PMO", "PIS", "BZG", "LIL", "TRN", "EMA", "ALC", "CHQ", "BVA", "CIY", "BUD", "RYG", "LPL", "EIN", "MAD", "TSF", "IBZ", "LTN", "MAN", "SOF", "MLA", "WRO", "SZZ", "BTS", "FUE", "GLA", "BRI", "BIQ", "LEI", "BRE", "SVQ", "SZG", "CRL", "RZE", "TFS"],
      "TRF": ["LPL", "AGP", "ALC", "STN"],
      "FMM": ["CIA", "SOF", "PMI", "AHO", "DUB", "SNN", "GRO", "OPO", "AGP", "PMO", "FAO", "ALC", "CHQ", "STN", "TPS", "TFS"],
      "TRS": ["BRI", "VLC", "STN", "TPS", "AHO"],
      "OLB": ["BTS", "GRO", "EIN", "MAD", "HHN", "NYO", "NRN", "STN", "DUB"],
      "NYO": ["BZR", "WMI", "ZAD", "BDS", "PSA", "CIA", "PMI", "AGP", "OLB", "LPA", "GDN", "FAO", "ALC", "CHQ", "BVA", "EIN", "TSF", "RJK", "SOF", "KRK", "MLA", "AHO", "BGY", "PFO", "BIQ", "SKG", "CPH", "NRN", "BRE", "STN", "CRL", "BCN", "TFS", "MRS", "RHO"],
      "TRN": ["CIY", "EIN", "IBZ", "VLC", "CAG", "BDS", "MLA", "AHO", "DUB", "BRI", "PMO", "CTA", "SXF", "CRL", "STN", "TPS", "BCN"],
      "EGC": ["LPL", "BRS", "EMA", "CRL", "STN"],
      "ALC": ["LGW", "HHN", "WMI", "NOC", "LBA", "BOH", "GOT", "ORK", "SCQ", "KTW", "GDN", "BFS", "MST", "VXO", "TMP", "POZ", "HAU", "FKB", "KRK", "NCL", "HAM", "BGY", "BRU", "EDI", "CGN", "BRS", "NRN", "CPH", "SXF", "STN", "KUN", "BLQ", "BLL", "KIR", "CIA", "FCO", "DUB", "TRF", "BHX", "FMM", "SNN", "NYO", "NQY", "EMA", "PIK", "BVA", "LPL", "RYG", "EIN", "NUE", "LDY", "MAN", "VST", "WRO", "GLA", "BRE", "CRL"],
      "XCR": ["OPO", "RAK"],
      "FMO": ["AGP"],
      "LPL": ["WMI", "NOC", "KGS", "PSA", "PMI", "DUB", "CCF", "TRF", "OPO", "VNO", "AGP", "ACE", "ORK", "LIG", "LPA", "FAO", "EGC", "ALC", "REU", "IBZ", "DTM", "POZ", "LDY", "SOF", "KRK", "MLA", "WRO", "SZZ", "BTS", "FUE", "FNI", "BCN", "TFS", "RHO"],
      "RYG": ["BZR", "WMI", "ZAD", "TLL", "PMI", "DUB", "VNO", "AGP", "LPA", "GDN", "FAO", "ALC", "CHQ", "BVA", "MAD", "IBZ", "PUY", "POZ", "MAN", "RJK", "KRK", "MLA", "WRO", "SZZ", "BGY", "LCJ", "EDI", "SKG", "RIX", "CRL", "STN", "KUN", "RZE", "TFS"],
      "TSF": ["HHN", "VLC", "CAG", "BDS", "BLL", "LBA", "CFU", "DUB", "AGP", "PMO", "NYO", "SUF", "EMA", "CHQ", "TPS", "BVA", "EIN", "BUD", "IBZ", "SOF", "WRO", "MLA", "AHO", "BRU", "BRI", "CTA", "BRS", "BRE", "SXF", "STN", "CRL", "TFS", "BCN"],
      "LPP": ["BGY"],
      "VDA": ["BTS", "BUD", "KRK", "KUN"],
      "VST": ["AGP", "ALC", "STN"],
      "XRY": ["HHN", "STN", "BCN"],
      "WRO": ["BLQ", "WMI", "CIA", "DUB", "SNN", "AGP", "ORK", "GDN", "BFS", "EMA", "ALC", "CHQ", "BVA", "LPL", "RYG", "MAD", "TSF", "MAN", "WAW", "MLA", "NCL", "BGY", "GRO", "GLA", "BRS", "STN", "TFS"],
      "EFL": ["PSA", "STN", "BGY"],
      "KLX": ["BGY"],
      "TSR": ["HHN", "NRN", "SXF", "STN", "CRL", "OTP", "BGY"],
      "RZE": ["RYG", "LTN", "BRS", "MAN", "EMA", "STN", "CFU", "DUB"],
      "RHO": ["BLQ", "ATH", "LPL", "NYO", "NRN", "PSA", "EMA", "STN", "CRL", "KUN", "BGY"],
      "CRV": ["PSA", "CIA", "FCO", "BGY"],
      "NTE": ["FEZ", "DUB", "MRS"],
      "FEZ": ["NTE", "EIN", "MAD", "HHN", "PSA", "TLS", "EBU", "CIA", "BGY", "DLE", "NRN", "FNI", "CRL", "STN", "BVA", "BCN", "MRS"],
      "WMI": ["BLQ", "VLC", "PSA", "TLS", "CIA", "LBA", "PMI", "CFU", "LIS", "DUB", "BHX", "OPO", "SNN", "GOT", "AGP", "LPA", "NYO", "GDN", "BFS", "EMA", "ALC", "CHQ", "TPS", "BVA", "ATH", "EIN", "LPL", "RYG", "MAD", "MAN", "WRO", "NCL", "BGY", "FUE", "EDI", "GLA", "CGN", "SKG", "BRS", "CPH", "CRL", "STN", "TFS", "BCN", "MRS"],
      "CAG": ["BLQ", "MAD", "TSF", "GOA", "HHN", "PEG", "CUF", "PSA", "CIA", "KRK", "FKB", "PMF", "BGY", "GRO", "BRI", "TRN", "NRN", "CRL", "TPS", "KUN", "BVA", "MRS"],
      "VGO": ["BLQ", "DUB", "BCN"],
      "PSA": ["CRV", "FEZ", "VLC", "HHN", "WMI", "CAG", "KGS", "LBA", "CFU", "GOT", "LPA", "ORK", "GDN", "SUF", "TPS", "RAK", "KRK", "AHO", "GRO", "EDI", "CTA", "NRN", "SXF", "STN", "BLL", "BDS", "DUB", "LIS", "PMO", "NYO", "EMA", "CHQ", "PIK", "BVA", "CIY", "LPL", "EIN", "BUD", "MAD", "IBZ", "SOF", "MLA", "FUE", "EFL", "BRI", "SKG", "SVQ", "CRL", "TFS", "RHO"],
      "AMS": ["DUB"],
      "LBA": ["TSF", "IBZ", "WMI", "PSA", "PMI", "KRK", "MLA", "CFU", "DUB", "FUE", "ACE", "AGP", "LPA", "LIG", "GDN", "FAO", "RIX", "ALC", "DNR", "MJV", "CHQ", "MPL", "TFS"],
      "BOH": ["GRO", "AGP", "LPA", "FAO", "ALC", "PMI", "MJV", "MLA", "TFS"],
      "PRG": ["BRE", "CIA", "CRL", "STN", "DUB", "BGY"],
      "ORK": ["LGW", "REU", "LPL", "PSA", "PMI", "WRO", "CCF", "BGY", "FUE", "GRO", "ACE", "AGP", "LPA", "GDN", "FAO", "ALC", "BOD", "STN", "TFS"],
      "DNR": ["EMA", "LBA", "STN"],
      "BOD": ["BLQ", "OPO", "ORK", "EDI", "BRS", "CIA", "SVQ", "STN", "CRL", "DUB"],
      "MST": ["OPO", "GRO", "BRI", "FAO", "ALC"],
      "TPS": ["BLQ", "WMI", "HHN", "CAG", "PEG", "PSA", "CIA", "FCO", "PMF", "FMM", "TRS", "TRN", "BVA", "EIN", "TSF", "GOA", "CUF", "FKB", "MLA", "KRK", "BGY", "BTS", "GRO", "AOI", "CRL", "KUN"],
      "VXO": ["NRN", "ALC"],
      "LRH": ["OPO", "EMA", "CRL", "STN", "DUB"],
      "LCA": ["BRU"],
      "NCE": ["SNN", "DUB"],
      "LRT": ["OPO"],
      "KRK": ["BLQ", "CAG", "KGS", "PSA", "CIA", "LBA", "PMI", "DUB", "BHX", "SNN", "AGP", "LPA", "GDN", "NYO", "BFS", "EMA", "ALC", "TPS", "BVA", "RYG", "EIN", "LPL", "MAD", "DTM", "VDA", "MAN", "MLA", "BGY", "PFO", "GRO", "EDI", "BRS", "STN", "CRL", "TFS"],
      "NCL": ["ACE", "AGP", "WMI", "GDN", "ALC", "WRO", "TFS", "DUB"],
      "LCJ": ["RYG", "EMA", "STN", "DUB"],
      "DOL": ["STN"],
      "GRO": ["HHN", "TLL", "CAG", "BLL", "BDS", "PEG", "NOC", "PSA", "PMI", "DUB", "BOH", "FMM", "OLB", "ORK", "TPS", "MST", "BVA", "EIN", "DTM", "POZ", "RAK", "LTN", "MAN", "WRO", "FKB", "KRK", "MLA", "AHO", "BTS", "SKG", "BRS", "NRN", "BRE", "PSR", "RBA", "STN", "CRL"],
      "CTA": ["BLQ", "EIN", "MAD", "TSF", "TRN", "PSA", "SXF", "FCO", "MXP", "MRS", "BGY"],
      "NRN": ["BLQ", "BZR", "FEZ", "VLC", "ZAD", "TLL", "CAG", "PEG", "PSA", "CIA", "PMI", "CFU", "OPO", "AGP", "ACE", "OLB", "LPA", "PMO", "BZG", "NYO", "SUF", "FAO", "ALC", "OUD", "CHQ", "VXO", "CIY", "AGA", "IBZ", "RAK", "MLA", "AHO", "BGY", "FUE", "GRO", "AOI", "BRI", "EDI", "SKG", "TSR", "SDR", "RIX", "PSR", "STN", "TFS", "RHO"],
      "OSR": ["STN"],
      "FNI": ["LPL", "FEZ", "LTN", "CRL"],
      "ESU": ["MRS"],
      "PSR": ["GRO", "HHN", "NRN", "STN", "CRL", "BVA", "BGY"],
      "RBA": ["GRO", "MAD", "CIA", "STN", "CRL", "BVA", "MRS"],
      "OSI": ["STN"],
      "MRS": ["NDR", "NTE", "TNG", "FEZ", "WMI", "VLC", "ZAD", "CAG", "CIA", "PMI", "FCO", "LIS", "DUB", "OPO", "GOT", "AGP", "PMO", "PIS", "LIL", "NYO", "OUD", "CHQ", "AGA", "EIN", "MAD", "IBZ", "TUF", "BES", "RAK", "MLA", "EDI", "CTA", "RBA", "ESU", "SVQ", "CRL", "STN"],
      "NDR": ["HHN", "CRL", "BVA", "BCN", "MRS"],
      "TNG": ["MAD", "CRL", "BVA", "MRS"],
      "RDZ": ["CRL", "STN", "DUB"],
      "PEG": ["GRO", "BDS", "CAG", "NRN", "STN", "CRL", "TPS"],
      "LDE": ["STN", "BGY"],
      "FCO": ["CIY", "CRV", "MAD", "BDS", "KGS", "MLA", "LIS", "CFU", "BRU", "SNN", "ACE", "AGP", "PMO", "BRI", "CTA", "SUF", "ALC", "SVQ", "STN", "CHQ", "TPS", "BCN", "MRS"],
      "CCF": ["EIN", "OPO", "LPL", "ORK", "GLA", "MAN", "EMA", "STN", "CRL", "DUB"],
      "OPO": ["BLQ", "WMI", "HHN", "VLC", "CIA", "PMI", "SXB", "LIS", "DUB", "MXP", "CCF", "FMM", "LPA", "PIS", "LIL", "FAO", "XCR", "BOD", "MST", "BVA", "CFE", "EIN", "LPL", "MAD", "DTM", "TUF", "LRH", "LRT", "EBU", "FKB", "PDL", "HAM", "BGY", "BRU", "CGN", "DLE", "CPH", "NRN", "BRE", "SXF", "CRL", "STN", "TFS", "BCN", "MRS"],
      "SNN": ["CWL", "LGW", "WMI", "MAN", "NCE", "PMI", "KRK", "WRO", "FCO", "FMM", "FUE", "AGP", "ACE", "PIS", "FAO", "SXF", "ALC", "STN", "KUN", "TFS", "BVA"],
      "LUZ": ["STN", "DUB"],
      "PDV": ["HHN", "STN"],
      "MAD": ["BLQ", "TFN", "TNG", "FEZ", "WMI", "CAG", "PSA", "TLS", "CIA", "PMI", "FCO", "DUB", "BHX", "OTP", "OPO", "VNO", "ACE", "OLB", "LPA", "PMO", "SCQ", "BVA", "EIN", "BUD", "RYG", "IBZ", "MAH", "RAK", "MAN", "WRO", "KRK", "MLA", "AHO", "HAM", "BGY", "BRU", "BTS", "FUE", "CGN", "CTA", "CPH", "BRE", "SXF", "RBA", "STN", "CRL", "TFS", "MRS"],
      "IBZ": ["BLQ", "HHN", "VLC", "PSA", "CIA", "LBA", "DUB", "BHX", "AGP", "TRN", "EMA", "PIK", "RYG", "LPL", "EIN", "MAD", "TSF", "MAN", "BGY", "BRU", "BRS", "NRN", "CRL", "STN", "BCN", "MRS"],
      "PUY": ["RYG", "HHN", "CRL", "STN"],
      "LTN": ["BZR", "NOC", "RAK", "KIR", "MLA", "DUB", "BTS", "FUE", "GRO", "VNO", "ACE", "LPA", "CPH", "FNI", "MJV", "KUN", "RZE", "TFS"],
      "MAH": ["MAD", "VLC", "EMA", "BCN"],
      "NUE": ["BUD", "AGP", "MAN", "CIA", "ALC", "MLA", "STN", "BGY"],
      "LDY": ["LPL", "GLA", "FAO", "ALC", "STN"],
      "MAN": ["BLQ", "BZR", "WMI", "VLC", "BDS", "ZAD", "TLL", "CIA", "PMI", "CCF", "LIS", "CFU", "DUB", "SNN", "AGP", "ACE", "LIG", "LPA", "GDN", "FAO", "ALC", "CHQ", "BVA", "STR", "EIN", "BUD", "RYG", "MAD", "IBZ", "NUE", "WRO", "MLA", "KRK", "BGY", "BTS", "FUE", "GRO", "BRE", "RIX", "MJV", "CRL", "RZE", "TFS", "BCN"],
      "EBU": ["OPO", "FEZ", "STN"],
      "SOF": ["LPL", "EIN", "ATH", "MAD", "TSF", "PSA", "CIA", "CDT", "FKB", "DUB", "MXP", "HAM", "BHX", "FMM", "GLA", "CGN", "NYO", "STN", "CRL", "BCN"],
      "PDL": ["OPO", "STN", "LIS"],
      "AOI": ["NRN", "CRL", "STN", "TPS", "AHO"],
      "CRA": ["VLC"],
      "BRI": ["BLQ", "TSF", "HHN", "VLC", "GOA", "CAG", "KGS", "PSA", "CIA", "MLA", "FKB", "FCO", "DUB", "BGY", "TRS", "TRN", "NRN", "SXF", "STN", "CRL", "MST", "BVA"],
      "LEJ": ["STN"],
      "LEI": ["STN", "CRL", "DUB"],
      "BRE": ["TLL", "PMI", "DUB", "CFU", "LIS", "OPO", "PRG", "AGP", "VNO", "LPA", "NYO", "FAO", "ALC", "CHQ", "MAD", "TSF", "TMP", "MAN", "BGY", "GRO", "FUE", "EDI", "SKG", "RIX", "STN", "TFS"],
      "CRL": ["FEZ", "WMI", "VLC", "CAG", "PGF", "PSA", "TLS", "CFU", "PRG", "ZAZ", "LPA", "SUF", "FAO", "BOD", "TPS", "REU", "LRH", "RAK", "ZTH", "RJK", "KRK", "AHO", "BGY", "PFO", "GRO", "EDI", "FSC", "SDR", "CPH", "FNI", "SXF", "RIX", "PSR", "RBA", "BCN", "MRS", "NDR", "BLQ", "TNG", "RDZ", "ZAD", "BDS", "PEG", "CIA", "PMI", "VRN", "DUB", "CCF", "OTP", "OPO", "VNO", "AGP", "ACE", "NYO", "TRN", "EGC", "ALC", "OUD", "CHQ", "CIY", "AGA", "ATH", "BUD", "RYG", "MAD", "TSF", "IBZ", "PUY", "MAN", "SOF", "TGD", "BTS", "FUE", "AOI", "BIQ", "BRI", "SKG", "TSR", "LEI", "SVQ", "MPL", "TFS", "RHO"],
      "MPL": ["HHN", "LBA", "CRL"]
    },
    "airports": [{
      "iataCode": "AAR",
      "name": "Aarhus",
      "base": false,
      "latitude": 56.3,
      "longitude": 10.619,
      "country": {
        "code": "dk",
        "name": "Denmark",
        "seoName": "denmark",
        "englishSeoName": "denmark",
        "currency": "DKK",
        "url": "denmark"
      }
    }, {
      "iataCode": "AGA",
      "name": "Agadir",
      "base": false,
      "latitude": 30.325,
      "longitude": -9.41307,
      "country": {
        "code": "ma",
        "name": "Morocco",
        "seoName": "morocco",
        "englishSeoName": "morocco",
        "currency": "MAD",
        "url": "morocco"
      }
    }, {
      "iataCode": "AHO",
      "name": "Alghero",
      "base": true,
      "latitude": 40.6321,
      "longitude": 8.29077,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "ALC",
      "name": "Alicante",
      "base": true,
      "latitude": 38.2822,
      "longitude": -0.558156,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "LEI",
      "name": "Almeria",
      "base": false,
      "latitude": 36.8439,
      "longitude": -2.3701,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "AMS",
      "name": "Amsterdam",
      "base": false,
      "latitude": 52.3105,
      "longitude": 4.76827,
      "country": {
        "code": "nl",
        "name": "Netherlands",
        "seoName": "netherlands",
        "englishSeoName": "netherlands",
        "currency": "EUR",
        "url": "netherlands"
      }
    }, {
      "iataCode": "AOI",
      "name": "Ancona",
      "base": false,
      "latitude": 43.6163,
      "longitude": 13.3623,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "ATH",
      "name": "Athens",
      "base": true,
      "latitude": 37.9364,
      "longitude": 23.9445,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "FKB",
      "name": "Baden-Baden",
      "base": true,
      "latitude": 48.7794,
      "longitude": 8.0805,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "BCN",
      "name": "Barcelona El Prat",
      "base": true,
      "latitude": 41.2971,
      "longitude": 2.07846,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "BRI",
      "name": "Bari",
      "base": true,
      "latitude": 41.1389,
      "longitude": 16.7606,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "BSL",
      "name": "Basel",
      "base": false,
      "latitude": 47.5896,
      "longitude": 7.52991,
      "country": {
        "code": "ch",
        "name": "Switzerland",
        "seoName": "switzerland",
        "englishSeoName": "switzerland",
        "currency": "EUR",
        "url": "switzerland"
      }
    }, {
      "iataCode": "BFS",
      "name": "Belfast International Airport",
      "base": false,
      "latitude": 54.6575,
      "longitude": -6.2158,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "EGC",
      "name": "Bergerac",
      "base": false,
      "latitude": 44.8253,
      "longitude": 0.518611,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "SXF",
      "name": "Berlin Schonefeld",
      "base": false,
      "latitude": 52.38,
      "longitude": 13.5225,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "BZR",
      "name": "Beziers",
      "base": false,
      "latitude": 43.3235,
      "longitude": 3.3539,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "BIQ",
      "name": "Biarritz",
      "base": false,
      "latitude": 43.4684,
      "longitude": -1.52332,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "BLL",
      "name": "Billund",
      "base": true,
      "latitude": 55.7403,
      "longitude": 9.15178,
      "country": {
        "code": "dk",
        "name": "Denmark",
        "seoName": "denmark",
        "englishSeoName": "denmark",
        "currency": "DKK",
        "url": "denmark"
      }
    }, {
      "iataCode": "BHX",
      "name": "Birmingham",
      "base": true,
      "latitude": 52.4539,
      "longitude": -1.74803,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "BLQ",
      "name": "Bologna",
      "base": true,
      "latitude": 44.5354,
      "longitude": 11.2887,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "BOD",
      "name": "Bordeaux",
      "base": false,
      "latitude": 44.8283,
      "longitude": -0.715556,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "BOH",
      "name": "Bournemouth",
      "base": true,
      "latitude": 50.78,
      "longitude": -1.8425,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "BTS",
      "name": "Bratislava",
      "base": true,
      "latitude": 48.1702,
      "longitude": 17.2127,
      "country": {
        "code": "sk",
        "name": "Slovakia",
        "seoName": "slovakia",
        "englishSeoName": "slovakia",
        "currency": "EUR",
        "url": "slovakia"
      }
    }, {
      "iataCode": "BRE",
      "name": "Bremen",
      "base": true,
      "latitude": 53.0475,
      "longitude": 8.78667,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "BES",
      "name": "Brest",
      "base": false,
      "latitude": 48.4479,
      "longitude": -4.41854,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "BDS",
      "name": "Brindisi",
      "base": true,
      "latitude": 40.6576,
      "longitude": 17.947,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "BRS",
      "name": "Bristol",
      "base": true,
      "latitude": 51.3827,
      "longitude": -2.71909,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "BVE",
      "name": "Brive",
      "base": false,
      "latitude": 45.1508,
      "longitude": 1.46917,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "BRQ",
      "name": "Brno",
      "base": false,
      "latitude": 49.1513,
      "longitude": 16.6944,
      "country": {
        "code": "cz",
        "name": "Czech Republic",
        "seoName": "czech-republic",
        "englishSeoName": "czech-republic",
        "currency": "CZK",
        "url": "czech-republic"
      }
    }, {
      "iataCode": "CRL",
      "name": "Brussels Charleroi",
      "base": true,
      "latitude": 50.4592,
      "longitude": 4.45382,
      "country": {
        "code": "be",
        "name": "Belgium",
        "seoName": "belgium",
        "englishSeoName": "belgium",
        "currency": "EUR",
        "url": "belgium"
      }
    }, {
      "iataCode": "BRU",
      "name": "Brussels Zaventem",
      "base": true,
      "latitude": 50.9014,
      "longitude": 4.48444,
      "country": {
        "code": "be",
        "name": "Belgium",
        "seoName": "belgium",
        "englishSeoName": "belgium",
        "currency": "EUR",
        "url": "belgium"
      }
    }, {
      "iataCode": "OTP",
      "name": "Bucharest (Otopeni)",
      "base": false,
      "latitude": 44.5722,
      "longitude": 26.1022,
      "country": {
        "code": "ro",
        "name": "Romania",
        "seoName": "romania",
        "englishSeoName": "romania",
        "currency": "EUR",
        "url": "romania"
      }
    }, {
      "iataCode": "BUD",
      "name": "Budapest",
      "base": true,
      "latitude": 47.4369,
      "longitude": 19.2556,
      "country": {
        "code": "hu",
        "name": "Hungary",
        "seoName": "hungary",
        "englishSeoName": "hungary",
        "currency": "HUF",
        "url": "hungary"
      }
    }, {
      "iataCode": "BZG",
      "name": "Bydgoszcz",
      "base": false,
      "latitude": 53.0968,
      "longitude": 17.9777,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "CAG",
      "name": "Cagliari",
      "base": true,
      "latitude": 39.2515,
      "longitude": 9.05428,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "CCF",
      "name": "Carcassonne",
      "base": false,
      "latitude": 43.216,
      "longitude": 2.30632,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "CWL",
      "name": "Cardiff",
      "base": false,
      "latitude": 51.3967,
      "longitude": -3.34333,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "CDT",
      "name": "Castellon",
      "base": false,
      "latitude": 39.999,
      "longitude": 0.026,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "CTA",
      "name": "Catania",
      "base": true,
      "latitude": 37.4668,
      "longitude": 15.0664,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "CHQ",
      "name": "Chania",
      "base": true,
      "latitude": 35.5317,
      "longitude": 24.1497,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "CFE",
      "name": "Clermont Ferrand",
      "base": false,
      "latitude": 45.7867,
      "longitude": 3.16917,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "CGN",
      "name": "Cologne",
      "base": true,
      "latitude": 50.8659,
      "longitude": 7.14274,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "CIY",
      "name": "Comiso",
      "base": false,
      "latitude": 36.9946,
      "longitude": 14.6072,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "CPH",
      "name": "Copenhagen",
      "base": false,
      "latitude": 55.6181,
      "longitude": 12.6561,
      "country": {
        "code": "dk",
        "name": "Denmark",
        "seoName": "denmark",
        "englishSeoName": "denmark",
        "currency": "DKK",
        "url": "denmark"
      }
    }, {
      "iataCode": "CFU",
      "name": "Corfu",
      "base": false,
      "latitude": 39.6019,
      "longitude": 19.9117,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "ORK",
      "name": "Cork",
      "base": true,
      "latitude": 51.8413,
      "longitude": -8.49111,
      "country": {
        "code": "ie",
        "name": "Ireland",
        "seoName": "ireland",
        "englishSeoName": "ireland",
        "currency": "EUR",
        "url": "ireland"
      }
    }, {
      "iataCode": "CRA",
      "name": "Craiova",
      "base": false,
      "latitude": 44.3181,
      "longitude": 23.8886,
      "country": {
        "code": "ro",
        "name": "Romania",
        "seoName": "romania",
        "englishSeoName": "romania",
        "currency": "EUR",
        "url": "romania"
      }
    }, {
      "iataCode": "CRV",
      "name": "Crotone",
      "base": false,
      "latitude": 38.99722,
      "longitude": 17.08028,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "CUF",
      "name": "Cuneo",
      "base": false,
      "latitude": 44.547,
      "longitude": 7.62322,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "DOL",
      "name": "Deauville-Normandy",
      "base": false,
      "latitude": 49.3653,
      "longitude": 0.154306,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "LDY",
      "name": "Derry",
      "base": false,
      "latitude": 55.0428,
      "longitude": -7.16111,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "DNR",
      "name": "Dinard",
      "base": false,
      "latitude": 48.5877,
      "longitude": -2.07996,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "DLE",
      "name": "Dole",
      "base": false,
      "latitude": 47.039,
      "longitude": 5.42725,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "DTM",
      "name": "Dortmund",
      "base": false,
      "latitude": 51.5183,
      "longitude": 7.61224,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "DUB",
      "name": "Dublin",
      "base": true,
      "latitude": 53.4213,
      "longitude": -6.27007,
      "country": {
        "code": "ie",
        "name": "Ireland",
        "seoName": "ireland",
        "englishSeoName": "ireland",
        "currency": "EUR",
        "url": "ireland"
      }
    }, {
      "iataCode": "NRN",
      "name": "Dusseldorf Weeze",
      "base": true,
      "latitude": 51.6024,
      "longitude": 6.14217,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "EMA",
      "name": "East Midlands",
      "base": true,
      "latitude": 52.8311,
      "longitude": -1.32806,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "EDI",
      "name": "Edinburgh",
      "base": true,
      "latitude": 55.95,
      "longitude": -3.3725,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "VDA",
      "name": "Eilat (Ovda)",
      "base": false,
      "latitude": 29.9402,
      "longitude": 34.9358,
      "country": {
        "code": "il",
        "name": "Israel",
        "seoName": "israel",
        "englishSeoName": "israel",
        "currency": "EUR",
        "url": "israel"
      }
    }, {
      "iataCode": "EIN",
      "name": "Eindhoven",
      "base": true,
      "latitude": 51.4501,
      "longitude": 5.37453,
      "country": {
        "code": "nl",
        "name": "Netherlands",
        "seoName": "netherlands",
        "englishSeoName": "netherlands",
        "currency": "EUR",
        "url": "netherlands"
      }
    }, {
      "iataCode": "ESU",
      "name": "Essaouira",
      "base": false,
      "latitude": 31.3918,
      "longitude": -9.6757,
      "country": {
        "code": "ma",
        "name": "Morocco",
        "seoName": "morocco",
        "englishSeoName": "morocco",
        "currency": "MAD",
        "url": "morocco"
      }
    }, {
      "iataCode": "FAO",
      "name": "Faro",
      "base": true,
      "latitude": 37.0144,
      "longitude": -7.96591,
      "country": {
        "code": "pt",
        "name": "Portugal",
        "seoName": "portugal",
        "englishSeoName": "portugal",
        "currency": "EUR",
        "url": "portugal"
      }
    }, {
      "iataCode": "FEZ",
      "name": "Fez",
      "base": true,
      "latitude": 33.9273,
      "longitude": -4.97796,
      "country": {
        "code": "ma",
        "name": "Morocco",
        "seoName": "morocco",
        "englishSeoName": "morocco",
        "currency": "MAD",
        "url": "morocco"
      }
    }, {
      "iataCode": "FSC",
      "name": "Figari",
      "base": false,
      "latitude": 41.5006,
      "longitude": 9.09778,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "HHN",
      "name": "Frankfurt Hahn",
      "base": true,
      "latitude": 49.9487,
      "longitude": 7.26389,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "FUE",
      "name": "Fuerteventura",
      "base": false,
      "latitude": 28.4527,
      "longitude": -13.8638,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "GDN",
      "name": "Gdansk",
      "base": true,
      "latitude": 54.3776,
      "longitude": 18.4662,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "GOA",
      "name": "Genoa",
      "base": false,
      "latitude": 44.4133,
      "longitude": 8.8375,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "GRO",
      "name": "Girona Barcelona",
      "base": true,
      "latitude": 41.901,
      "longitude": 2.76055,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "GLA",
      "name": "Glasgow International",
      "base": true,
      "latitude": 55.67194,
      "longitude": -4.43306,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "PIK",
      "name": "Glasgow Prestwick",
      "base": true,
      "latitude": 55.5094,
      "longitude": -4.58667,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "GOT",
      "name": "Gothenburg Landvetter",
      "base": false,
      "latitude": 57.6741,
      "longitude": 12.2925,
      "country": {
        "code": "se",
        "name": "Sweden",
        "seoName": "sweden",
        "englishSeoName": "sweden",
        "currency": "SEK",
        "url": "sweden"
      }
    }, {
      "iataCode": "LPA",
      "name": "Gran Canaria",
      "base": true,
      "latitude": 27.9319,
      "longitude": -15.3866,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "GNB",
      "name": "Grenoble",
      "base": false,
      "latitude": 45.3629,
      "longitude": 5.32937,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "HAM",
      "name": "Hamburg",
      "base": false,
      "latitude": 53.63028,
      "longitude": 9.99111,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "HAU",
      "name": "Haugesund",
      "base": false,
      "latitude": 59.3453,
      "longitude": 5.20836,
      "country": {
        "code": "no",
        "name": "Norway",
        "seoName": "norway",
        "englishSeoName": "norway",
        "currency": "NOK",
        "url": "norway"
      }
    }, {
      "iataCode": "IBZ",
      "name": "Ibiza",
      "base": false,
      "latitude": 38.8729,
      "longitude": 1.37312,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "XRY",
      "name": "Jerez",
      "base": false,
      "latitude": 36.7446,
      "longitude": -6.06011,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "KLX",
      "name": "Kalamata",
      "base": false,
      "latitude": 37.0683,
      "longitude": 22.0255,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "KTW",
      "name": "Katowice",
      "base": false,
      "latitude": 50.4743,
      "longitude": 19.08,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "KUN",
      "name": "Kaunas",
      "base": true,
      "latitude": 54.9639,
      "longitude": 24.0848,
      "country": {
        "code": "lt",
        "name": "Lithuania",
        "seoName": "lithuania",
        "englishSeoName": "lithuania",
        "currency": "EUR",
        "url": "lithuania"
      }
    }, {
      "iataCode": "EFL",
      "name": "Kefalonia",
      "base": false,
      "latitude": 38.1201,
      "longitude": 20.5005,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "KIR",
      "name": "Kerry",
      "base": false,
      "latitude": 52.1809,
      "longitude": -9.52378,
      "country": {
        "code": "ie",
        "name": "Ireland",
        "seoName": "ireland",
        "englishSeoName": "ireland",
        "currency": "EUR",
        "url": "ireland"
      }
    }, {
      "iataCode": "NOC",
      "name": "Knock Ireland West",
      "base": false,
      "latitude": 53.9103,
      "longitude": -8.81849,
      "country": {
        "code": "ie",
        "name": "Ireland",
        "seoName": "ireland",
        "englishSeoName": "ireland",
        "currency": "EUR",
        "url": "ireland"
      }
    }, {
      "iataCode": "KGS",
      "name": "Kos",
      "base": false,
      "latitude": 36.7933,
      "longitude": 27.0917,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "KRK",
      "name": "Krakow",
      "base": true,
      "latitude": 50.0777,
      "longitude": 19.7848,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "SUF",
      "name": "Lamezia",
      "base": true,
      "latitude": 38.9054,
      "longitude": 16.2423,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "ACE",
      "name": "Lanzarote",
      "base": true,
      "latitude": 28.9455,
      "longitude": -13.6052,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "LPP",
      "name": "Lappeenranta",
      "base": false,
      "latitude": 61.0446,
      "longitude": 28.1444,
      "country": {
        "code": "fi",
        "name": "Finland",
        "seoName": "finland",
        "englishSeoName": "finland",
        "currency": "EUR",
        "url": "finland"
      }
    }, {
      "iataCode": "LCA",
      "name": "Larnaca",
      "base": false,
      "latitude": 34.8751,
      "longitude": 33.6249,
      "country": {
        "code": "cy",
        "name": "Cyprus",
        "seoName": "cyprus",
        "englishSeoName": "cyprus",
        "currency": "EUR",
        "url": "cyprus"
      }
    }, {
      "iataCode": "LRH",
      "name": "La Rochelle",
      "base": false,
      "latitude": 46.1792,
      "longitude": -1.19528,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "LBA",
      "name": "Leeds Bradford",
      "base": true,
      "latitude": 53.8659,
      "longitude": -1.66057,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "LEJ",
      "name": "Leipzig",
      "base": false,
      "latitude": 51.4324,
      "longitude": 12.2416,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "LIL",
      "name": "Lille",
      "base": false,
      "latitude": 50.5619,
      "longitude": 3.08944,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "LIG",
      "name": "Limoges",
      "base": false,
      "latitude": 45.8628,
      "longitude": 1.17944,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "LNZ",
      "name": "Linz",
      "base": false,
      "latitude": 48.2332,
      "longitude": 14.1875,
      "country": {
        "code": "at",
        "name": "Austria",
        "seoName": "austria",
        "englishSeoName": "austria",
        "currency": "EUR",
        "url": "austria"
      }
    }, {
      "iataCode": "LIS",
      "name": "Lisbon",
      "base": true,
      "latitude": 38.7813,
      "longitude": -9.13592,
      "country": {
        "code": "pt",
        "name": "Portugal",
        "seoName": "portugal",
        "englishSeoName": "portugal",
        "currency": "EUR",
        "url": "portugal"
      }
    }, {
      "iataCode": "LPL",
      "name": "Liverpool",
      "base": true,
      "latitude": 53.3336,
      "longitude": -2.84972,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "LCJ",
      "name": "Lodz",
      "base": false,
      "latitude": 51.7219,
      "longitude": 19.3981,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "LGW",
      "name": "London Gatwick",
      "base": false,
      "latitude": 51.1481,
      "longitude": -0.190278,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "LTN",
      "name": "London Luton",
      "base": true,
      "latitude": 51.8747,
      "longitude": -0.368333,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "STN",
      "name": "London Stansted",
      "base": true,
      "latitude": 51.885,
      "longitude": 0.235,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "LRT",
      "name": "Lorient",
      "base": false,
      "latitude": 47.7588,
      "longitude": -3.4378,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "LDE",
      "name": "Lourdes",
      "base": false,
      "latitude": 43.1787,
      "longitude": -0.006439,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "LUZ",
      "name": "Lublin",
      "base": false,
      "latitude": 51.2319,
      "longitude": 22.6903,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "MST",
      "name": "Maastricht",
      "base": false,
      "latitude": 50.9117,
      "longitude": 5.77014,
      "country": {
        "code": "nl",
        "name": "Netherlands",
        "seoName": "netherlands",
        "englishSeoName": "netherlands",
        "currency": "EUR",
        "url": "netherlands"
      }
    }, {
      "iataCode": "MAD",
      "name": "Madrid",
      "base": true,
      "latitude": 40.4936,
      "longitude": -3.56676,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "AGP",
      "name": "Malaga",
      "base": true,
      "latitude": 36.6749,
      "longitude": -4.49911,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "MLA",
      "name": "Malta",
      "base": true,
      "latitude": 35.8575,
      "longitude": 14.4775,
      "country": {
        "code": "mt",
        "name": "Malta",
        "seoName": "malta",
        "englishSeoName": "malta",
        "currency": "EUR",
        "url": "malta"
      }
    }, {
      "iataCode": "MAN",
      "name": "Manchester",
      "base": true,
      "latitude": 53.3537,
      "longitude": -2.27495,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "RAK",
      "name": "Marrakesh",
      "base": true,
      "latitude": 31.6069,
      "longitude": -8.0363,
      "country": {
        "code": "ma",
        "name": "Morocco",
        "seoName": "morocco",
        "englishSeoName": "morocco",
        "currency": "MAD",
        "url": "morocco"
      }
    }, {
      "iataCode": "MRS",
      "name": "Marseille Provence",
      "base": false,
      "latitude": 43.4393,
      "longitude": 5.22142,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "FMM",
      "name": "Memmingen (Munich West)",
      "base": false,
      "latitude": 47.9888,
      "longitude": 10.2395,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "MAH",
      "name": "Menorca",
      "base": false,
      "latitude": 39.8626,
      "longitude": 4.21865,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "BGY",
      "name": "Milan Bergamo",
      "base": true,
      "latitude": 45.6739,
      "longitude": 9.70417,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "MXP",
      "name": "Milan Malpensa",
      "base": true,
      "latitude": 45.63,
      "longitude": 8.7231,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "MPL",
      "name": "Montpellier",
      "base": false,
      "latitude": 43.5762,
      "longitude": 3.96301,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "FMO",
      "name": "Münster",
      "base": false,
      "latitude": 52.1346,
      "longitude": 7.68483,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "MJV",
      "name": "Murcia",
      "base": false,
      "latitude": 37.775,
      "longitude": -0.812389,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "JMK",
      "name": "Mykonos",
      "base": false,
      "latitude": 37.4351,
      "longitude": 25.3481,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "NDR",
      "name": "Nador",
      "base": false,
      "latitude": 34.9888,
      "longitude": -3.02821,
      "country": {
        "code": "ma",
        "name": "Morocco",
        "seoName": "morocco",
        "englishSeoName": "morocco",
        "currency": "MAD",
        "url": "morocco"
      }
    }, {
      "iataCode": "NTE",
      "name": "Nantes",
      "base": false,
      "latitude": 47.1532,
      "longitude": -1.61073,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "NCL",
      "name": "Newcastle",
      "base": false,
      "latitude": 55.0375,
      "longitude": -1.69167,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "NQY",
      "name": "Newquay",
      "base": false,
      "latitude": 50.4406,
      "longitude": -4.99541,
      "country": {
        "code": "gb",
        "name": "United Kingdom",
        "seoName": "united-kingdom",
        "englishSeoName": "united-kingdom",
        "currency": "GBP",
        "url": "united-kingdom"
      }
    }, {
      "iataCode": "NCE",
      "name": "Nice",
      "base": false,
      "latitude": 43.6584,
      "longitude": 7.21587,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "FNI",
      "name": "Nimes",
      "base": false,
      "latitude": 43.7574,
      "longitude": 4.41635,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "INI",
      "name": "Nis",
      "base": false,
      "latitude": 43.3372,
      "longitude": 21.8536,
      "country": {
        "code": "rs",
        "name": "Serbia",
        "seoName": "serbia",
        "englishSeoName": "serbia",
        "currency": "EUR",
        "url": "serbia"
      }
    }, {
      "iataCode": "NUE",
      "name": "Nuremberg",
      "base": false,
      "latitude": 49.4987,
      "longitude": 11.0669,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "OLB",
      "name": "Olbia",
      "base": true,
      "latitude": 40.8987,
      "longitude": 9.51763,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "OSI",
      "name": "Osijek",
      "base": false,
      "latitude": 45.4627,
      "longitude": 18.8102,
      "country": {
        "code": "hr",
        "name": "Croatia",
        "seoName": "croatia",
        "englishSeoName": "croatia",
        "currency": "EUR",
        "url": "croatia"
      }
    }, {
      "iataCode": "RYG",
      "name": "Oslo Rygge",
      "base": true,
      "latitude": 59.3789,
      "longitude": 10.7856,
      "country": {
        "code": "no",
        "name": "Norway",
        "seoName": "norway",
        "englishSeoName": "norway",
        "currency": "NOK",
        "url": "norway"
      }
    }, {
      "iataCode": "TRF",
      "name": "Oslo Torp",
      "base": false,
      "latitude": 59.1867,
      "longitude": 10.2586,
      "country": {
        "code": "no",
        "name": "Norway",
        "seoName": "norway",
        "englishSeoName": "norway",
        "currency": "NOK",
        "url": "norway"
      }
    }, {
      "iataCode": "OSR",
      "name": "Ostrava",
      "base": false,
      "latitude": 49.6963,
      "longitude": 18.1111,
      "country": {
        "code": "cz",
        "name": "Czech Republic",
        "seoName": "czech-republic",
        "englishSeoName": "czech-republic",
        "currency": "CZK",
        "url": "czech-republic"
      }
    }, {
      "iataCode": "OUD",
      "name": "Oujda",
      "base": false,
      "latitude": 34.7872,
      "longitude": -1.92399,
      "country": {
        "code": "ma",
        "name": "Morocco",
        "seoName": "morocco",
        "englishSeoName": "morocco",
        "currency": "MAD",
        "url": "morocco"
      }
    }, {
      "iataCode": "PLQ",
      "name": "Palanga",
      "base": false,
      "latitude": 55.9733,
      "longitude": 21.0939,
      "country": {
        "code": "lt",
        "name": "Lithuania",
        "seoName": "lithuania",
        "englishSeoName": "lithuania",
        "currency": "EUR",
        "url": "lithuania"
      }
    }, {
      "iataCode": "PMO",
      "name": "Palermo",
      "base": true,
      "latitude": 38.176,
      "longitude": 13.091,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "PMI",
      "name": "Palma",
      "base": true,
      "latitude": 39.5517,
      "longitude": 2.73881,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "PFO",
      "name": "Paphos",
      "base": true,
      "latitude": 34.718,
      "longitude": 32.4857,
      "country": {
        "code": "cy",
        "name": "Cyprus",
        "seoName": "cyprus",
        "englishSeoName": "cyprus",
        "currency": "EUR",
        "url": "cyprus"
      }
    }, {
      "iataCode": "BVA",
      "name": "Paris Beauvais",
      "base": false,
      "latitude": 49.4544,
      "longitude": 2.11278,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "XCR",
      "name": "Paris Vatry",
      "base": false,
      "latitude": 48.7761,
      "longitude": 4.18449,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "PMF",
      "name": "Parma",
      "base": false,
      "latitude": 44.8245,
      "longitude": 10.2964,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "GPA",
      "name": "Patras (Araxos)",
      "base": false,
      "latitude": 38.1511,
      "longitude": 21.4256,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "PGF",
      "name": "Perpignan",
      "base": false,
      "latitude": 42.7404,
      "longitude": 2.87067,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "PEG",
      "name": "Perugia",
      "base": false,
      "latitude": 43.0959,
      "longitude": 12.5132,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "PSR",
      "name": "Pescara",
      "base": true,
      "latitude": 42.4317,
      "longitude": 14.1811,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "PSA",
      "name": "Pisa",
      "base": true,
      "latitude": 43.6839,
      "longitude": 10.3927,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "PDV",
      "name": "Plovdiv",
      "base": false,
      "latitude": 42.0678,
      "longitude": 24.8508,
      "country": {
        "code": "bg",
        "name": "Bulgaria",
        "seoName": "bulgaria",
        "englishSeoName": "bulgaria",
        "currency": "EUR",
        "url": "bulgaria"
      }
    }, {
      "iataCode": "TGD",
      "name": "Podgorica",
      "base": false,
      "latitude": 42.3594,
      "longitude": 19.2519,
      "country": {
        "code": "me",
        "name": "Montenegro",
        "seoName": "montenegro",
        "englishSeoName": "montenegro",
        "currency": "EUR",
        "url": "montenegro"
      }
    }, {
      "iataCode": "PIS",
      "name": "Poitiers",
      "base": false,
      "latitude": 46.5877,
      "longitude": 0.306666,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "PDL",
      "name": "Ponta Delgada",
      "base": false,
      "latitude": 37.74194,
      "longitude": -25.69778,
      "country": {
        "code": "pt",
        "name": "Portugal",
        "seoName": "portugal",
        "englishSeoName": "portugal",
        "currency": "EUR",
        "url": "portugal"
      }
    }, {
      "iataCode": "OPO",
      "name": "Porto",
      "base": true,
      "latitude": 41.2481,
      "longitude": -8.68139,
      "country": {
        "code": "pt",
        "name": "Portugal",
        "seoName": "portugal",
        "englishSeoName": "portugal",
        "currency": "EUR",
        "url": "portugal"
      }
    }, {
      "iataCode": "POZ",
      "name": "Poznan",
      "base": false,
      "latitude": 52.421,
      "longitude": 16.8263,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "PRG",
      "name": "Prague",
      "base": false,
      "latitude": 50.1008,
      "longitude": 14.26,
      "country": {
        "code": "cz",
        "name": "Czech Republic",
        "seoName": "czech-republic",
        "englishSeoName": "czech-republic",
        "currency": "CZK",
        "url": "czech-republic"
      }
    }, {
      "iataCode": "PUY",
      "name": "Pula",
      "base": false,
      "latitude": 44.8935,
      "longitude": 13.9222,
      "country": {
        "code": "hr",
        "name": "Croatia",
        "seoName": "croatia",
        "englishSeoName": "croatia",
        "currency": "EUR",
        "url": "croatia"
      }
    }, {
      "iataCode": "RBA",
      "name": "Rabat",
      "base": false,
      "latitude": 34.0515,
      "longitude": -6.75152,
      "country": {
        "code": "ma",
        "name": "Morocco",
        "seoName": "morocco",
        "englishSeoName": "morocco",
        "currency": "MAD",
        "url": "morocco"
      }
    }, {
      "iataCode": "REU",
      "name": "Reus Barcelona",
      "base": false,
      "latitude": 41.1474,
      "longitude": 1.16717,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "RHO",
      "name": "Rhodes",
      "base": false,
      "latitude": 36.4054,
      "longitude": 28.0862,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "RIX",
      "name": "Riga",
      "base": false,
      "latitude": 56.9236,
      "longitude": 23.9711,
      "country": {
        "code": "lv",
        "name": "Latvia",
        "seoName": "latvia",
        "englishSeoName": "latvia",
        "currency": "EUR",
        "url": "latvia"
      }
    }, {
      "iataCode": "RJK",
      "name": "Rijeka",
      "base": false,
      "latitude": 45.2169,
      "longitude": 14.5703,
      "country": {
        "code": "hr",
        "name": "Croatia",
        "seoName": "croatia",
        "englishSeoName": "croatia",
        "currency": "EUR",
        "url": "croatia"
      }
    }, {
      "iataCode": "RDZ",
      "name": "Rodez",
      "base": false,
      "latitude": 44.4079,
      "longitude": 2.48267,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "CIA",
      "name": "Rome Ciampino",
      "base": true,
      "latitude": 41.7994,
      "longitude": 12.5949,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "FCO",
      "name": "Rome Fiumicino",
      "base": true,
      "latitude": 41.8045,
      "longitude": 12.2508,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "RZE",
      "name": "Rzeszow",
      "base": false,
      "latitude": 50.11,
      "longitude": 22.019,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "SZG",
      "name": "Salzburg",
      "base": false,
      "latitude": 47.7933,
      "longitude": 13.0043,
      "country": {
        "code": "at",
        "name": "Austria",
        "seoName": "austria",
        "englishSeoName": "austria",
        "currency": "EUR",
        "url": "austria"
      }
    }, {
      "iataCode": "SDR",
      "name": "Santander",
      "base": false,
      "latitude": 43.4271,
      "longitude": -3.82001,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "SCQ",
      "name": "Santiago",
      "base": true,
      "latitude": 42.8963,
      "longitude": -8.41514,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "JTR",
      "name": "Santorini National",
      "base": false,
      "latitude": 36.3992,
      "longitude": 25.4793,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "SVQ",
      "name": "Seville",
      "base": true,
      "latitude": 37.418,
      "longitude": -5.89311,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "SNN",
      "name": "Shannon",
      "base": true,
      "latitude": 52.702,
      "longitude": -8.92482,
      "country": {
        "code": "ie",
        "name": "Ireland",
        "seoName": "ireland",
        "englishSeoName": "ireland",
        "currency": "EUR",
        "url": "ireland"
      }
    }, {
      "iataCode": "SFT",
      "name": "Skelleftea",
      "base": false,
      "latitude": 64.6248,
      "longitude": 21.0769,
      "country": {
        "code": "se",
        "name": "Sweden",
        "seoName": "sweden",
        "englishSeoName": "sweden",
        "currency": "SEK",
        "url": "sweden"
      }
    }, {
      "iataCode": "SOF",
      "name": "Sofia",
      "base": false,
      "latitude": 42.67,
      "longitude": 23.35,
      "country": {
        "code": "bg",
        "name": "Bulgaria",
        "seoName": "bulgaria",
        "englishSeoName": "bulgaria",
        "currency": "EUR",
        "url": "bulgaria"
      }
    }, {
      "iataCode": "EBU",
      "name": "St Etienne",
      "base": false,
      "latitude": 45.5406,
      "longitude": 4.29639,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "NYO",
      "name": "Stockholm Skavsta",
      "base": true,
      "latitude": 58.7886,
      "longitude": 16.9122,
      "country": {
        "code": "se",
        "name": "Sweden",
        "seoName": "sweden",
        "englishSeoName": "sweden",
        "currency": "SEK",
        "url": "sweden"
      }
    }, {
      "iataCode": "VST",
      "name": "Stockholm Vasteras",
      "base": false,
      "latitude": 59.5894,
      "longitude": 16.6336,
      "country": {
        "code": "se",
        "name": "Sweden",
        "seoName": "sweden",
        "englishSeoName": "sweden",
        "currency": "SEK",
        "url": "sweden"
      }
    }, {
      "iataCode": "SXB",
      "name": "Strasbourg",
      "base": false,
      "latitude": 48.5383,
      "longitude": 7.62823,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "STR",
      "name": "Stuttgart",
      "base": false,
      "latitude": 48.69,
      "longitude": 9.2219,
      "country": {
        "code": "de",
        "name": "Germany",
        "seoName": "germany",
        "englishSeoName": "germany",
        "currency": "EUR",
        "url": "germany"
      }
    }, {
      "iataCode": "SZZ",
      "name": "Szczecin",
      "base": false,
      "latitude": 53.5847,
      "longitude": 14.9022,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "TLL",
      "name": "Tallinn",
      "base": false,
      "latitude": 59.4133,
      "longitude": 24.8328,
      "country": {
        "code": "ee",
        "name": "Estonia",
        "seoName": "estonia",
        "englishSeoName": "estonia",
        "currency": "EUR",
        "url": "estonia"
      }
    }, {
      "iataCode": "TMP",
      "name": "Tampere",
      "base": false,
      "latitude": 61.4141,
      "longitude": 23.6044,
      "country": {
        "code": "fi",
        "name": "Finland",
        "seoName": "finland",
        "englishSeoName": "finland",
        "currency": "EUR",
        "url": "finland"
      }
    }, {
      "iataCode": "TNG",
      "name": "Tangier",
      "base": false,
      "latitude": 35.7269,
      "longitude": -5.91689,
      "country": {
        "code": "ma",
        "name": "Morocco",
        "seoName": "morocco",
        "englishSeoName": "morocco",
        "currency": "MAD",
        "url": "morocco"
      }
    }, {
      "iataCode": "TFN",
      "name": "Tenerife North",
      "base": false,
      "latitude": 28.4827,
      "longitude": -16.3415,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "TFS",
      "name": "Tenerife Sth",
      "base": true,
      "latitude": 28.0445,
      "longitude": -16.5725,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "SKG",
      "name": "Thessaloniki",
      "base": true,
      "latitude": 40.5197,
      "longitude": 22.9709,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "TSR",
      "name": "Timisoara",
      "base": false,
      "latitude": 45.81,
      "longitude": 21.3381,
      "country": {
        "code": "ro",
        "name": "Romania",
        "seoName": "romania",
        "englishSeoName": "romania",
        "currency": "EUR",
        "url": "romania"
      }
    }, {
      "iataCode": "TLS",
      "name": "Toulouse",
      "base": false,
      "latitude": 43.6044,
      "longitude": 1.4439,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "TUF",
      "name": "Tours Loire Valley",
      "base": false,
      "latitude": 47.4322,
      "longitude": 0.727606,
      "country": {
        "code": "fr",
        "name": "France",
        "seoName": "france",
        "englishSeoName": "france",
        "currency": "EUR",
        "url": "france"
      }
    }, {
      "iataCode": "TPS",
      "name": "Trapani",
      "base": true,
      "latitude": 37.9114,
      "longitude": 12.488,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "TRS",
      "name": "Trieste",
      "base": false,
      "latitude": 45.8275,
      "longitude": 13.4722,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "TRN",
      "name": "Turin",
      "base": false,
      "latitude": 45.2008,
      "longitude": 7.64963,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "VLC",
      "name": "Valencia",
      "base": true,
      "latitude": 39.4893,
      "longitude": -0.481625,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "VLL",
      "name": "Valladolid",
      "base": false,
      "latitude": 41.7061,
      "longitude": -4.85194,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "VXO",
      "name": "Växjö",
      "base": false,
      "latitude": 56.9291,
      "longitude": 14.728,
      "country": {
        "code": "se",
        "name": "Sweden",
        "seoName": "sweden",
        "englishSeoName": "sweden",
        "currency": "SEK",
        "url": "sweden"
      }
    }, {
      "iataCode": "TSF",
      "name": "Venice Treviso",
      "base": false,
      "latitude": 45.6484,
      "longitude": 12.1944,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "VRN",
      "name": "Verona",
      "base": false,
      "latitude": 45.3957,
      "longitude": 10.8885,
      "country": {
        "code": "it",
        "name": "Italy",
        "seoName": "italy",
        "englishSeoName": "italy",
        "currency": "EUR",
        "url": "italy"
      }
    }, {
      "iataCode": "VGO",
      "name": "Vigo",
      "base": false,
      "latitude": 42.23,
      "longitude": -8.63,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }, {
      "iataCode": "VNO",
      "name": "Vilnius",
      "base": false,
      "latitude": 54.6341,
      "longitude": 25.2858,
      "country": {
        "code": "lt",
        "name": "Lithuania",
        "seoName": "lithuania",
        "englishSeoName": "lithuania",
        "currency": "EUR",
        "url": "lithuania"
      }
    }, {
      "iataCode": "WAW",
      "name": "Warsaw Chopin",
      "base": false,
      "latitude": 52.1657,
      "longitude": 20.9671,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "WMI",
      "name": "Warsaw Modlin",
      "base": true,
      "latitude": 52.4511,
      "longitude": 20.6517,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "WRO",
      "name": "Wroclaw",
      "base": true,
      "latitude": 51.1027,
      "longitude": 16.8858,
      "country": {
        "code": "pl",
        "name": "Poland",
        "seoName": "poland",
        "englishSeoName": "poland",
        "currency": "PLN",
        "url": "poland"
      }
    }, {
      "iataCode": "ZAD",
      "name": "Zadar",
      "base": true,
      "latitude": 44.1083,
      "longitude": 15.3467,
      "country": {
        "code": "hr",
        "name": "Croatia",
        "seoName": "croatia",
        "englishSeoName": "croatia",
        "currency": "EUR",
        "url": "croatia"
      }
    }, {
      "iataCode": "ZTH",
      "name": "Zakynthos",
      "base": false,
      "latitude": 37.7509,
      "longitude": 20.8843,
      "country": {
        "code": "gr",
        "name": "Greece",
        "seoName": "greece",
        "englishSeoName": "greece",
        "currency": "EUR",
        "url": "greece"
      }
    }, {
      "iataCode": "ZAZ",
      "name": "Zaragoza",
      "base": false,
      "latitude": 41.6662,
      "longitude": -1.04155,
      "country": {
        "code": "es",
        "name": "Spain",
        "seoName": "spain",
        "englishSeoName": "spain",
        "currency": "EUR",
        "url": "spain"
      }
    }], "discounts": {
      "routes": {
        "IBZSCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNIBZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNBIO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSVLL": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIMJV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEBIO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZLEI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAGRO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZMJV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEMJV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHTFS": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAIBZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "XRYMAD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "AGPPMI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPASCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHTFN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACESDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNMJV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZTFN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAOVD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMILEI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHREU": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSALV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZFUE": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZSDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEXRY": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "XRYBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZTFS": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPASVQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNPMI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEGRO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHVLL": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZAGP": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQTFN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQTFS": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAALV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "AGPZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEIBZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQACE": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHLPA": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQPMI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSMJV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIGRO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNLEI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQBIO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEPMI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEAGP": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNREU": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHMJV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNAGP": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHSDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUESDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIMAD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACELEI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIAGP": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZGRO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSOVD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEMAH": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHAGP": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEMAD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZALV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSSDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMILPA": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNGRO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "AGPIBZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSIBZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIVLL": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUELEI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZSVQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEMAD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEALV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNSDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZBIO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHSCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEMAH": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEPMI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "AGPGRO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEVLL": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEREU": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQSDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACESCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSSCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEXRY": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPASDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHFUE": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNOVD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAAGP": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHBIO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNSCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQLPA": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQSCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEGRO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSBIO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZMAD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHGRO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "AGPBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHLEI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEALV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSSVQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAVLL": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUESVQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQIBZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNSVQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAREU": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEVLL": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAPMI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIREU": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZACE": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEREU": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMITFN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUESCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMITFS": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIBIO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSGRO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZXRY": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNMAH": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHALV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEMJV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZLPA": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNMAD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAXRY": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSREU": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEAGP": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZREU": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAMAH": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZVLL": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHSVQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMISCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIACE": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAMAD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSLEI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQALC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNXRY": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPABIO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSAGP": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIFUE": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZOVD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEIBZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "FUEOVD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIXRY": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHBCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "AGPSCQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPALEI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIOVD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMISVQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHACE": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "IBZVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNALV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHMAD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQREU": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMISDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHOVD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "AGPVLL": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "AGPVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEOVD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPABCN": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIZAZ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSPMI": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSMAH": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSMAD": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACESVQ": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNVLC": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "MAHXRY": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "ACEBIO": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFNVLL": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "LPAMJV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "AGPSDR": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "TFSXRY": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "PMIALV": ["ESDSC5", "ESDSC4", "ESDSC1"],
        "SVQGRO": ["ESDSC5", "ESDSC4", "ESDSC1"]
      },
      "countries": {
        "es": ["ESDSC3", "ESDSC2"]
      },
      "types": [{
        "globalCode": "ESDSC2",
        "code": "DSC2",
        "name": "General Spanish Large Family 5%",
        "percentage": 5
      }, {
        "globalCode": "ESDSC3",
        "code": "DSC3",
        "name": "Special Spanish Large Family 10%",
        "percentage": 10
      }, {
        "globalCode": "ESDSC1",
        "code": "DSC1",
        "name": "Resident of Islands or Ceuta 50%",
        "percentage": 50
      }, {
        "globalCode": "ESDSC4",
        "code": "DSC4",
        "name": "General Resident/Large Family 55%",
        "percentage": 55
      }, {
        "globalCode": "ESDSC5",
        "code": "DSC5",
        "name": "Special Resident/Large Family 60%",
        "percentage": 60
      }]
    }, "countries": [{
      "code": "at",
      "name": "Austria",
      "seoName": "austria",
      "englishSeoName": "austria",
      "currency": "EUR",
      "url": "austria"
    }, {
      "code": "be",
      "name": "Belgium",
      "seoName": "belgium",
      "englishSeoName": "belgium",
      "currency": "EUR",
      "url": "belgium"
    }, {
      "code": "bg",
      "name": "Bulgaria",
      "seoName": "bulgaria",
      "englishSeoName": "bulgaria",
      "currency": "EUR",
      "url": "bulgaria"
    }, {
      "code": "hr",
      "name": "Croatia",
      "seoName": "croatia",
      "englishSeoName": "croatia",
      "currency": "EUR",
      "url": "croatia"
    }, {
      "code": "cy",
      "name": "Cyprus",
      "seoName": "cyprus",
      "englishSeoName": "cyprus",
      "currency": "EUR",
      "url": "cyprus"
    }, {
      "code": "cz",
      "name": "Czech Republic",
      "seoName": "czech-republic",
      "englishSeoName": "czech-republic",
      "currency": "CZK",
      "url": "czech-republic"
    }, {
      "code": "dk",
      "name": "Denmark",
      "seoName": "denmark",
      "englishSeoName": "denmark",
      "currency": "DKK",
      "url": "denmark"
    }, {
      "code": "ee",
      "name": "Estonia",
      "seoName": "estonia",
      "englishSeoName": "estonia",
      "currency": "EUR",
      "url": "estonia"
    }, {
      "code": "fi",
      "name": "Finland",
      "seoName": "finland",
      "englishSeoName": "finland",
      "currency": "EUR",
      "url": "finland"
    }, {
      "code": "fr",
      "name": "France",
      "seoName": "france",
      "englishSeoName": "france",
      "currency": "EUR",
      "url": "france"
    }, {
      "code": "de",
      "name": "Germany",
      "seoName": "germany",
      "englishSeoName": "germany",
      "currency": "EUR",
      "url": "germany"
    }, {
      "code": "gr",
      "name": "Greece",
      "seoName": "greece",
      "englishSeoName": "greece",
      "currency": "EUR",
      "url": "greece"
    }, {
      "code": "hu",
      "name": "Hungary",
      "seoName": "hungary",
      "englishSeoName": "hungary",
      "currency": "HUF",
      "url": "hungary"
    }, {
      "code": "ie",
      "name": "Ireland",
      "seoName": "ireland",
      "englishSeoName": "ireland",
      "currency": "EUR",
      "url": "ireland"
    }, {
      "code": "il",
      "name": "Israel",
      "seoName": "israel",
      "englishSeoName": "israel",
      "currency": "EUR",
      "url": "israel"
    }, {
      "code": "it",
      "name": "Italy",
      "seoName": "italy",
      "englishSeoName": "italy",
      "currency": "EUR",
      "url": "italy"
    }, {
      "code": "lv",
      "name": "Latvia",
      "seoName": "latvia",
      "englishSeoName": "latvia",
      "currency": "EUR",
      "url": "latvia"
    }, {
      "code": "lt",
      "name": "Lithuania",
      "seoName": "lithuania",
      "englishSeoName": "lithuania",
      "currency": "EUR",
      "url": "lithuania"
    }, {
      "code": "mt",
      "name": "Malta",
      "seoName": "malta",
      "englishSeoName": "malta",
      "currency": "EUR",
      "url": "malta"
    }, {
      "code": "me",
      "name": "Montenegro",
      "seoName": "montenegro",
      "englishSeoName": "montenegro",
      "currency": "EUR",
      "url": "montenegro"
    }, {
      "code": "ma",
      "name": "Morocco",
      "seoName": "morocco",
      "englishSeoName": "morocco",
      "currency": "MAD",
      "url": "morocco"
    }, {
      "code": "nl",
      "name": "Netherlands",
      "seoName": "netherlands",
      "englishSeoName": "netherlands",
      "currency": "EUR",
      "url": "netherlands"
    }, {
      "code": "no",
      "name": "Norway",
      "seoName": "norway",
      "englishSeoName": "norway",
      "currency": "NOK",
      "url": "norway"
    }, {
      "code": "pl",
      "name": "Poland",
      "seoName": "poland",
      "englishSeoName": "poland",
      "currency": "PLN",
      "url": "poland"
    }, {
      "code": "pt",
      "name": "Portugal",
      "seoName": "portugal",
      "englishSeoName": "portugal",
      "currency": "EUR",
      "url": "portugal"
    }, {
      "code": "ro",
      "name": "Romania",
      "seoName": "romania",
      "englishSeoName": "romania",
      "currency": "EUR",
      "url": "romania"
    }, {
      "code": "rs",
      "name": "Serbia",
      "seoName": "serbia",
      "englishSeoName": "serbia",
      "currency": "EUR",
      "url": "serbia"
    }, {
      "code": "sk",
      "name": "Slovakia",
      "seoName": "slovakia",
      "englishSeoName": "slovakia",
      "currency": "EUR",
      "url": "slovakia"
    }, {
      "code": "es",
      "name": "Spain",
      "seoName": "spain",
      "englishSeoName": "spain",
      "currency": "EUR",
      "url": "spain"
    }, {
      "code": "se",
      "name": "Sweden",
      "seoName": "sweden",
      "englishSeoName": "sweden",
      "currency": "SEK",
      "url": "sweden"
    }, {
      "code": "ch",
      "name": "Switzerland",
      "seoName": "switzerland",
      "englishSeoName": "switzerland",
      "currency": "EUR",
      "url": "switzerland"
    }, {
      "code": "gb",
      "name": "United Kingdom",
      "seoName": "united-kingdom",
      "englishSeoName": "united-kingdom",
      "currency": "GBP",
      "url": "united-kingdom"
    }],
    "messages": {
      "choose_departure_airport": "Choose a departure airport",
      "you_are_travelling_today": "You are booking a flight that departs today. Please note that only flights departing 6 hours or more after the current time can be booked online. For same-day travel you must check-in online and print your boarding pass as soon as you have completed your booking. Online check-in closes strictly 2 hours prior to scheduled departure.",
      "more_infants_than_adults": "If you wish to book a greater number of Infants than Adults, please contact our reservation center for possible arrangements.",
      "choose_return_date": "Please select your arrival date.",
      "choose_departure_city": "You have not selected a departure airport. Please tell us where you’ll be taking off from!",
      "messages.flying_today": "Flying today?",
      "enter_at_least_one_passenger": "You must enter at least one passenger.",
      "children_under_16": "Children under the age of 16 must be accompanied by an adult aged 16 or over. Unaccompanied children under the age of 16 are not accepted on Ryanair flights. To proceed please ensure that an adult is travelling with the child.",
      "just_day_trip": "Just a day trip?",
      "choose_destination_city": "You have not selected a destination airport. Please tell us where you want to go!",
      "too_many_passengers": "Too many passengers",
      "same_departure_and_return_dates": "Are you sure you want to return on the same day? <br/>Why not book Business Plus? You get a flexible ticket, security fast track, extra leg room and priority boarding.T&Cs apply.  \n",
      "choose_destination_airport": "Choose a destination airport",
      "choose_departure_date": "Please select your departure date.",
      "invalid_number_of_passengers": "We’re sorry, but the number of passengers you have chosen cannot be booked online. We allow a maximum of 25 passengers per booking. If your group is larger than this, or if you want to book a greater number of infants than adults, please contact our reservation centre for further help with your booking"
    }
  }
  return obj
}