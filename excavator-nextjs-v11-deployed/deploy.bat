@echo off
:: excavator-nextjs-v10.zip 自动化部署工具（Windows 专属）
chcp 65001 >nul
echo =======================================================
echo     欢迎使用 Excavator Next.js 网站自动部署脚本
echo =======================================================
echo.

:: 1. 检查 Git 是否安装
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [错误] 本地未检测到 Git 命令行工具！
    echo 请先前往 https://git-scm.com/ 下载并安装 Git，然后重新运行本脚本。
    pause
    exit /b 1
)

:: 2. 初始化本地 Git 仓库
if not exist .git (
    echo [*] 正在本地初始化 Git 仓库...
    git init
    git branch -M main
) else (
    echo [*] 检测到本地已存在 Git 仓库。
)

:: 3. 检查是否有未提交的文件并进行提交
echo [*] 正在添加文件到暂存区并创建首次提交...
git add .
git commit -m "chore: initial commit of excavator nextjs demo" >nul 2>nul
echo [成功] 代码已在本地完成 Commit。

:: 4. 检查 gh (GitHub CLI) 是否安装
where gh >nul 2>nul
if %errorlevel% neq 0 (
    echo [*] 未检测到 GitHub CLI (gh) 工具。
    echo.
    echo =======================================================
    echo 您可以通过以下方式手动创建 GitHub 仓库：
    echo 1. 打开浏览器登录 GitHub 并创建一个名为: excavator-nextjs-v10 的仓库
    echo 2. 在当前目录下打开 CMD 运行以下命令：
    echo    git remote add origin https://github.com/您的用户名/excavator-nextjs-v10.git
    echo    git push -u origin main
    echo =======================================================
    pause
    exit /b 0
)

:: 5. 使用 GitHub CLI 检查并登录
echo [*] 正在检测 GitHub 登录状态...
gh auth status >nul 2>nul
if %errorlevel% neq 0 (
    echo [提示] 您的 gh CLI 暂未登录 GitHub，正在唤起登录流程...
    gh auth login
)

:: 6. 创建 GitHub 远程仓库并推送
echo [*] 正在 GitHub 上创建公开仓库: excavator-nextjs-v10...
gh repo create excavator-nextjs-v10 --public --source=. --remote=origin --push
if %errorlevel% neq 0 (
    echo.
    echo [警告] 仓库可能已存在或创建失败。尝试直接进行推送：
    git push -u origin main
) else (
    echo [成功] GitHub 仓库创建并推送完成！
)

echo.
echo =======================================================
echo                    GitHub 部署完成！
echo =======================================================
echo.
echo 下一步：请按照以下指引完成 Vercel 部署
echo 1. 登录您的 Vercel 账号 (https://vercel.com)
echo 2. 点击 "Add New" -> "Project"
echo 3. 导入刚刚创建的 GitHub 仓库 "excavator-nextjs-v10"
echo 4. 点击 "Deploy" 部署，Vercel 会自动识别 Next.js 并生成在线预览链接！
echo.
echo =======================================================
pause
