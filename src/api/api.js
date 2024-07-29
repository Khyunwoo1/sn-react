import axios from "axios";
import { ENDPOINTS } from "./endpoints";

export async function getNetworkSecurityZoneRecords(setAllSecurityZones) {
  try {
    const res = await axios.get(ENDPOINTS.GET_NETWORK_SECURITY_ZONE_RECORDS, {
      params: {
        sysparm_display_value: "all",
      },
    });

    setAllSecurityZones(res.data.result);
  } catch (e) {
    console.error("e", e);
  }
}

export async function getNetworkSecurityZoneSwitchRecords(
  setAllZoneSwitchRecords
) {
  try {
    const resp = await axios.get(
      ENDPOINTS.GET_NETWORK_SECURITY_ZONE_SWITCH_RECORDS,
      {
        params: {
          sysparm_display_value: "all",
        },
      }
    );

    setAllZoneSwitchRecords(resp.data.result);
  } catch (err) {
    console.error("err", err);
  }
}

export async function UpdateNetworkSecurityZoneSwitchRecords(
  getSysIdsForAvailIps,
  closeModal,
  matchedZonesAndIpPools
) {
  try {
    const availIpWithSysIds = getSysIdsForAvailIps();

    await axios.post(ENDPOINTS.UPDATE_NETWORK_SECURITY_ZONE_SWITCH_RECORDS, {
      matched_records: matchedZonesAndIpPools,
      available_ips: availIpWithSysIds,
    });
    closeModal();
  } catch (e) {
    console.error("e", e);
  }
}
