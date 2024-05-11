// WorldIDVerification.js
import React, { useState } from 'react'; 
import { IDKitWidget } from "@worldcoin/idkit";



function WorldIDVerification() {
  // 検証成功時に表示するメッセージの状態を管理
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleVerify = (verificationResult) => {
    console.log("Verification result:", verificationResult);
    // 検証結果を処理する（この例ではログに出力しているだけです）
  };

  const onSuccess = (result) => {
    console.log("Verification success:", result);
    // 検証が成功した場合、状態を更新してメッセージを表示
    setVerificationSuccess(true);
  };

  return (
    <div>
      <IDKitWidget
        app_id={process.env.REACT_APP_APP_ID}
        actionId={process.env.REACT_APP_ACTION_ID}
        onSuccess={onSuccess}
        handleVerify={handleVerify}
      >
        {({ open }) => (
          <button onClick={open}>Verify with World ID</button>
        )}
      </IDKitWidget>
      {/* 検証が成功した場合にメッセージを表示 */}
      {verificationSuccess && <p>Verification Successful!</p>}
    </div>
  );
}

export default WorldIDVerification;