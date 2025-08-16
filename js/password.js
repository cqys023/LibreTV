// ======= 已禁用密码保护 =======

// 永远返回未启用
function isPasswordProtected() {
    return false;
}

function isPasswordRequired() {
    return false;
}

function ensurePasswordProtection() {
    // 直接跳过
    return true;
}

async function verifyPassword(password) {
    // 永远返回成功
    return true;
}

function isPasswordVerified() {
    // 永远返回已验证
    return true;
}

// 伪造 UI 相关函数（不再显示任何弹窗）
function showPasswordModal() {
    console.log("🔓 密码保护已禁用，跳过验证。");
}
function hidePasswordModal() {}
function showPasswordError() {}
function hidePasswordError() {}
async function handlePasswordSubmit() {
    return true;
}
function initPasswordProtection() {
    console.log("🔓 密码保护系统已禁用。");
}

// 全局挂载（防止其他地方调用报错）
window.isPasswordProtected = isPasswordProtected;
window.isPasswordRequired = isPasswordRequired;
window.isPasswordVerified = isPasswordVerified;
window.verifyPassword = verifyPassword;
window.ensurePasswordProtection = ensurePasswordProtection;
window.showPasswordModal = showPasswordModal;
window.hidePasswordModal = hidePasswordModal;
window.handlePasswordSubmit = handlePasswordSubmit;
window.initPasswordProtection = initPasswordProtection;

// 页面加载时，直接跳过密码验证
document.addEventListener('DOMContentLoaded', function () {
    initPasswordProtection();
});
