const Header = () => {
  return (
    <header
      className="header h-[60px] w-full
     flex justify-end p-3 "
    >
      <nav className=" flex gap-6">
        <ul className=" flex items-center text-sm gap-3 text-[13px]">
          <li>
            <a href="" className="text-[13px]">
              Gmail
            </a>
          </li>
          <li>
            <a href="" className="text-[13px]">
              Imágenes
            </a>
          </li>
        </ul>
        <div className="flex gap-5 items-center">
          <a href="">
            <svg
              className="gb_E"
              focusable="false"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              {" "}
              <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path>{" "}
            </svg>
          </a>
          <button>
            <img
              src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
              alt="image"
            />
          </button>
          <button className="rounded-full">
            <img
              src="https://lh3.googleusercontent.com/fife/ALs6j_GPVXR_uaPf6i_Fir3FSyEA5xutvexCUXC4dzjGCpPRd-BvvnEVOerE_HSCpTKm5u6HjtlyAe_deU7bY8QclPPoeT77p6cNHyqjYRoWeP8fQKWurf4HGCD7KcoSuio9LlURBV5gRXVRkmVVMxR5zkZEpvKWFaru7MGOdWyuv5APbFDIrHBrIa2_QLkM0DxRKJ9tc1P5L1uoudA4Zj_sgKBTn0Z3hx5okRIiIBukqDLGAvTkP0-B5awZN-nziLzkyLYWyErwBBFD8POMy2yloAROTZWUGGpxrCxPs9Fuy9-faUR9LNkIX0HHMA1pMStx92AyDqJ7A-gDY-poK4lfZnhydd_-s_40fu9DONe6zo62KbAW_RIEHZAq9YbaMC_WApRQ63Eg3ZTuDNSR9meMTUxuGIHC58sQbL2k7760gi-dwYWZYRUOWVMgXzQEuJ-Q7C8JSpSRFIQV-1s0oL3IwRGQ31UIeDOEyRROkUtMrM_f8wUc_FVRk9OeQnbULDUBHsAdO_q5TLYpCe8EmNjRR0KrV43h8GZ8bzxajE-4reQ-HdAtJOGYSA9LAhmzeyI-ac4wsqU5lCCw-pWTuB7YvzGejiEvJa3xtKVtPKc2juT7pDCdYrib7mXrX_bnm2MWn2e4lT80q1YgW1tmYOSYQlTLRxZvPdOYajBV6saWx1hE0jgJ6xmrW-4PIDky2EzgHqsRkVMJPxe8JDQd7cF9YHzLgz0wz735V3vuhnxqxfQZUTPiBKpJkTofMujW0Ahqffbyim0970U7ujMojdGP_DBpcP0NPGuFjbh_pzS1YyVrn39F8xqviY-SXSLaHiXW4pDFkB4ozIZugY7ufqYwnC3CshSmeYMuoCRa46ZcotnFJGowaqpMsdNdEax39p5Yg19gYp2b7Uv8xN9KOpSLe8xIy9giJ-vPTqL6J09YQOxRFvjtidD8ejTUIYAZmJSYRXay_wEbldw-HXL3LCpoY7vjBCancro6fh0Q7EFjm6si_Xq-JFZLCNyus48ZmLTxdJK1EuHcu7bVuhtQFciardRzW7anEPo6X5p-O_8XEug-XObct-4sIGkpiHOskawip7dVEJwJTLB_Yr-zhIHd1ZOs2gSoBiTcV1-tqKw-vBjBLppN0kl-Bm6Q6BtqjKkKzeMN1bzrHkB-E_qXUXb3cTEq5TTUIreizIcBi7TlNnugy1aCVCRGh7aS5DBxV0DKEuIkbIhu9LdorrTmSQOJ7Wdv4dvY4BpA7AbXs4bzbzffeJFNa_mn4J0_PFcsi5FXtM8nHE8l7ojI1Xxq6ZbUH684SPdWbwe2iuZmj49BJ6NwwI4qfd0Z40C4sMT7CZIVq8-nKBmfYxNs85FfaqtsJion-ST2Qd9_cgPGXMUBuUAArqiPBk3EYBfuNGPBLPQV-bwjcWF0-2VtnyESKgGK7MPipXfQaNkzRJ6RcBE=s32-c"
              alt="avatar"
              className="rounded-full"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
