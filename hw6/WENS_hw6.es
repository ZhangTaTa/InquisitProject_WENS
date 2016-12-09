[WARNING]
WARNING: DO NOT EDIT THIS FILE DIRECTLY!
Use only E-Studio to edit this file.
Editing of this file from any other means is not supported
and may corrupt the experiment design specification.
Technical support will not be able to address any issue in
regards to this file format.

[Experiment]
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
_VersionPersist=6
Root="SessionProc"
Author="lenovo (bnu)"
Abstract=""
Notes=""
Creation=1481242927

[Device0]
_VersionPersist=1
OpenDevice=1
Width=1024
Height=768
Bpp=32
Name="Display"
Class="Display"

[Device1]
_VersionPersist=1
OpenDevice=0
Channels=2
Samples=22050
Bps=16
Name="Sound"
Class="Sound"

[Device2]
_VersionPersist=1
OpenDevice=1
CollectionMode=1
EmulateDeviceName=""
CapsLock=0
NumLock=1
Name="Keyboard"
Class="Keyboard"

[Device3]
_VersionPersist=1
OpenDevice=1
CollectionMode=1
EmulateDeviceName=""
OpenMode=0
ShowCursor=0
Name="Mouse"
Class="Mouse"

[DataFile]
WarnBeforeOverwrite=1
WarnIfConvertFailed=1
RemoveERecoveryFile=0
ReceiveFeedbackDuringDataFileConversion=1
LogLevel(2).Name="Block"
LogLevel(3).Name="Trial"
LogLevel(4).Name="SubTrial"
LogLevel(5).Name="LogLevel5"
LogLevel(6).Name="LogLevel6"
LogLevel(7).Name="LogLevel7"
LogLevel(8).Name="LogLevel8"
LogLevel(9).Name="LogLevel9"
LogLevel(10).Name="LogLevel10"

[StartupInfo]
DisplaySummary=1
UseDefaults=0

[StartupInfo1]
Name="Subject"
Prompt="Please enter the Subject Number (1-32767, 0=No Data Logging):"
DataType=0
Enabled=1
PromptEnabled=1
Default="1"
Min=0
Max=32767
PrivateFlags=268435477
PrivateInfo=1

[StartupInfo2]
Name="Session"
Prompt="Please enter the Session Number (1-32767):"
DataType=0
Enabled=1
PromptEnabled=1
Default="1"
Min=1
Max=32767
PrivateFlags=268435477
PrivateInfo=1

[StartupInfo3]
Name="Group"
Prompt="Please enter Subject's Group (0-32767):"
DataType=0
Enabled=0
PromptEnabled=0
Default="1"
Min=0
Max=32767

[StartupInfo4]
Name="Name"
Prompt="Please enter Subject's Name:"
DataType=1
Enabled=0
PromptEnabled=0
Default=""
MaxLength=255

[StartupInfo5]
Name="Age"
Prompt="Please enter Subject's Age (0-150):"
DataType=0
Enabled=0
PromptEnabled=0
Default="0"
Min=0
Max=150

[StartupInfo6]
Name="Sex"
Prompt="Please enter Subject's Sex:"
DataType=2
Enabled=0
PromptEnabled=0
Default="male"
Choice(1).Value="male"
Choice(2).Value="female"

[StartupInfo7]
Name="Handedness"
Prompt="Enter Subject's Handedness:"
DataType=2
Enabled=0
PromptEnabled=0
Default="left"
Choice(1).Value="left"
Choice(2).Value="right"

[StartupInfo8]
Name="ResearcherID"
Prompt="Please enter Researcher's ID:"
DataType=0
Enabled=0
PromptEnabled=0
Default="1"
Min=0
Max=32767

[Object0]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
_ItemList="introduction;blank;List1;goodbye"
_VersionPersist=1
FlowLines(0).Count=4
FlowLines(0).FlowItem(0).Name="introduction"
FlowLines(0).FlowItem(1).Name="blank"
FlowLines(0).FlowItem(2).Name="List1"
FlowLines(0).FlowItem(3).Name="goodbye"
LogData=1
Name="SessionProc"
TypeName="Procedure"
Tag=""
Notes=""

[Object1]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=0
Logging("OnsetTime").Log=0
Logging("DurationError").Log=0
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=0
Logging("ACC").Log=0
Logging("RT").Log=0
Logging("RESP").Log=0
Logging("CRESP").Log=0
Logging("Tag").Log=0
Input(0)=!Data0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Duration="-1"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Filename="Images\\ָ����.bmp"
Stretch="No"
MirrorUpDown="No"
MirrorLeftRight="No"
BackColor="white"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="100%"
Height="100%"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
ClearAfter="No"
SourceColorKey="black"
UseSourceColorKey="No"
Name="introduction"
TypeName="ImageDisplay"
Tag=""
Notes=""

[Data0]
DeviceName="Keyboard"
DeviceClass="Keyboard"
AllowableInput="{SPACE}"
CorrectInput=""
TimeLimit=""
MaxCount="1"
InputAction=1
SyncOwnerDuration=1
Enabled=1
FlushInputBuffer="Yes"
TerminationInput=""
UserTag=""
ResponseMode="All"
ProcessBackspace="Yes"

[Object2]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=0
Logging("OnsetTime").Log=0
Logging("DurationError").Log=0
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=0
Logging("ACC").Log=0
Logging("RT").Log=0
Logging("RESP").Log=0
Logging("CRESP").Log=0
Logging("Tag").Log=0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Text=""
ForeColor="black"
BackColor="white"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="100%"
Height="100%"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
FontName="Courier New"
FontSize="18"
FontBold="Yes"
FontItalic="No"
FontUnderline="No"
FontStrikeout="No"
WordWrap=1
ClearAfter="No"
Duration="1000"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="blank"
TypeName="TextDisplay"
Tag=""
Notes=""

[Object3]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("Path").Log=-1
Logging("Word").Log=-1
Logging("LeftPic").Log=-1
Logging("CenterPic").Log=-1
Logging("RightPic").Log=-1
Logging("CorrectResponse").Log=-1
_ItemList="WordPicture"
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Order=0
OrderBy=0
ResetEveryRun=0
HideLevelsWithZeroWeight=0
CycleDef=0
CycleValueSamples=0
CycleValueCondition=""
ExitDef=0
ExitValueCycles=1
ExitValueSamples=1
ExitValueSeconds=0
ExitValueCondition=""
LoadMethod=0
Filename=""
UserAttributes=6
Attributes("Weight").DefaultValue="1"
Attributes("Weight").Visible=1
Attributes("Weight").Width=75
Attributes("Weight").OrderIndex=0
Attributes("Nested").DefaultValue=""
Attributes("Nested").Visible=1
Attributes("Nested").Width=75
Attributes("Nested").OrderIndex=1
Attributes("Procedure").DefaultValue="WordPicture"
Attributes("Procedure").Visible=1
Attributes("Procedure").Width=75
Attributes("Procedure").OrderIndex=2
Attributes(1).Name="Path"
Attributes(1).DefaultValue="?"
Attributes(1).VarType=8
Attributes(1).VarTypeInternal=8
Attributes(1).Visible=1
Attributes(1).Width=75
Attributes(2).Name="Word"
Attributes(2).DefaultValue="?"
Attributes(2).VarType=8
Attributes(2).VarTypeInternal=8
Attributes(2).Visible=1
Attributes(2).Width=75
Attributes(3).Name="LeftPic"
Attributes(3).DefaultValue="?"
Attributes(3).VarType=8
Attributes(3).VarTypeInternal=8
Attributes(3).Visible=1
Attributes(3).Width=75
Attributes(4).Name="CenterPic"
Attributes(4).DefaultValue="?"
Attributes(4).VarType=8
Attributes(4).VarTypeInternal=8
Attributes(4).Visible=1
Attributes(4).Width=75
Attributes(5).Name="RightPic"
Attributes(5).DefaultValue="?"
Attributes(5).VarType=8
Attributes(5).VarTypeInternal=8
Attributes(5).Visible=1
Attributes(5).Width=75
Attributes(6).Name="CorrectResponse"
Attributes(6).DefaultValue="?"
Attributes(6).VarType=8
Attributes(6).VarTypeInternal=8
Attributes(6).Visible=1
Attributes(6).Width=75
Levels=54
Levels(1).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(2).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(3).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(4).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(5).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(6).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(7).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(8).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(9).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(10).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(11).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(12).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(13).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(14).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(15).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(16).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(17).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(18).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(19).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(20).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(21).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(22).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(23).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(24).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(25).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(26).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(27).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(28).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(29).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(30).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(31).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(32).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(33).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(34).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(35).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(36).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(37).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(38).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(39).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(40).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(41).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(42).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(43).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(44).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(45).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(46).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(47).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(48).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(49).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(50).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(51).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(52).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(53).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Levels(54).ValueString="1\t\tWordPicture\timages/\t?\t?\t?\t?\t?\t"
Name="List1"
TypeName="List"
Tag=""
Notes=""

[Object4]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=0
Logging("OnsetTime").Log=0
Logging("DurationError").Log=0
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=0
Logging("ACC").Log=0
Logging("RT").Log=0
Logging("RESP").Log=0
Logging("CRESP").Log=0
Logging("Tag").Log=0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Duration="1000"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Filename="Images\\������.bmp"
Stretch="No"
MirrorUpDown="No"
MirrorLeftRight="No"
BackColor="white"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="100%"
Height="100%"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
ClearAfter="No"
SourceColorKey="black"
UseSourceColorKey="No"
Name="goodbye"
TypeName="ImageDisplay"
Tag=""
Notes=""

[Object5]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
_ItemList="Stimulus;blank1;InLine1"
_VersionPersist=1
FlowLines(0).Count=3
FlowLines(0).FlowItem(0).Name="Stimulus"
FlowLines(0).FlowItem(1).Name="blank1"
FlowLines(0).FlowItem(2).Name="InLine1"
LogData=1
Name="WordPicture"
TypeName="Procedure"
Tag=""
Notes=""

[Object6]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=-1
Logging("OnsetTime").Log=-1
Logging("DurationError").Log=-1
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=-1
Logging("ACC").Log=-1
Logging("RT").Log=-1
Logging("RESP").Log=-1
Logging("CRESP").Log=-1
Logging("Tag").Log=0
Input(0)=!Data1
_VersionPersist=2
ActiveState="Default"
States.Count=1
States(1).Name="Default"
States("Default").X="center"
States("Default").Y="center"
States("Default").Width="100%"
States("Default").Height="100%"
States("Default").XAlign="center"
States("Default").YAlign="center"
States("Default").BackColor="white"
States("Default").BackStyle="opaque"
States("Default").BorderColor="black"
States("Default").BorderWidth="0"
States("Default").ClearAfter="No"
States("Default").Enabled="Yes"
States("Default").ChildCount=4
States("Default").Objects(1).Type="Image"
States("Default").Objects(1).Filename="[Path][CenterPic].bmp"
States("Default").Objects(1).Stretch="No"
States("Default").Objects(1).MirrorLeftRight="No"
States("Default").Objects(1).MirrorUpDown="No"
States("Default").Objects(1).Width="200"
States("Default").Objects(1).Height="200"
States("Default").Objects(1).X="center"
States("Default").Objects(1).Y="center"
States("Default").Objects(1).AlignHorizontal="center"
States("Default").Objects(1).AlignVertical="center"
States("Default").Objects(1).ForeColor="black"
States("Default").Objects(1).BackColor="white"
States("Default").Objects(1).BackStyle="opaque"
States("Default").Objects(1).BorderWidth="0"
States("Default").Objects(1).BorderColor="black"
States("Default").Objects(1).XAlign="center"
States("Default").Objects(1).YAlign="top"
States("Default").Objects(1).SourceColorKey="black"
States("Default").Objects(1).UseSourceColorKey="No"
States("Default").Objects(1).Name="Image1"
States("Default").Objects(2).Type="Image"
States("Default").Objects(2).Filename="[Path][LeftPic].bmp"
States("Default").Objects(2).Stretch="No"
States("Default").Objects(2).MirrorLeftRight="No"
States("Default").Objects(2).MirrorUpDown="No"
States("Default").Objects(2).Width="200"
States("Default").Objects(2).Height="200"
States("Default").Objects(2).X="162"
States("Default").Objects(2).Y="center"
States("Default").Objects(2).AlignHorizontal="center"
States("Default").Objects(2).AlignVertical="center"
States("Default").Objects(2).ForeColor="black"
States("Default").Objects(2).BackColor="white"
States("Default").Objects(2).BackStyle="opaque"
States("Default").Objects(2).BorderWidth="0"
States("Default").Objects(2).BorderColor="black"
States("Default").Objects(2).XAlign="center"
States("Default").Objects(2).YAlign="top"
States("Default").Objects(2).SourceColorKey="black"
States("Default").Objects(2).UseSourceColorKey="No"
States("Default").Objects(2).Name="Image2"
States("Default").Objects(3).Type="Image"
States("Default").Objects(3).Filename="[Path][RightPic].bmp"
States("Default").Objects(3).Stretch="No"
States("Default").Objects(3).MirrorLeftRight="No"
States("Default").Objects(3).MirrorUpDown="No"
States("Default").Objects(3).Width="200"
States("Default").Objects(3).Height="200"
States("Default").Objects(3).X="862"
States("Default").Objects(3).Y="center"
States("Default").Objects(3).AlignHorizontal="center"
States("Default").Objects(3).AlignVertical="center"
States("Default").Objects(3).ForeColor="black"
States("Default").Objects(3).BackColor="white"
States("Default").Objects(3).BackStyle="opaque"
States("Default").Objects(3).BorderWidth="0"
States("Default").Objects(3).BorderColor="black"
States("Default").Objects(3).XAlign="center"
States("Default").Objects(3).YAlign="top"
States("Default").Objects(3).SourceColorKey="black"
States("Default").Objects(3).UseSourceColorKey="No"
States("Default").Objects(3).Name="Image3"
States("Default").Objects(4).Type="Text"
States("Default").Objects(4).Text="[Word]"
States("Default").Objects(4).Width="200"
States("Default").Objects(4).Height="100"
States("Default").Objects(4).X="center"
States("Default").Objects(4).Y="184"
States("Default").Objects(4).AlignHorizontal="center"
States("Default").Objects(4).AlignVertical="center"
States("Default").Objects(4).FontName="Courier New"
States("Default").Objects(4).FontSize="18"
States("Default").Objects(4).FontBold="Yes"
States("Default").Objects(4).FontUnderline="No"
States("Default").Objects(4).FontStrikeout="No"
States("Default").Objects(4).FontItalic="No"
States("Default").Objects(4).ForeColor="black"
States("Default").Objects(4).BackColor="white"
States("Default").Objects(4).BackStyle="opaque"
States("Default").Objects(4).BorderWidth="0"
States("Default").Objects(4).BorderColor="black"
States("Default").Objects(4).XAlign="center"
States("Default").Objects(4).YAlign="center"
States("Default").Objects(4).WordWrap=1
States("Default").Objects(4).Name="Text1"
Duration="-1"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="Stimulus"
TypeName="Slide"
Tag=""
Notes=""

[Data1]
DeviceName="Keyboard"
DeviceClass="Keyboard"
AllowableInput="{LEFTARROW}{DOWNARROW}{RIGHTARROW}"
CorrectInput="[CorrectResponse]"
TimeLimit=""
MaxCount="1"
InputAction=1
SyncOwnerDuration=1
Enabled=1
FlushInputBuffer="Yes"
TerminationInput=""
UserTag=""
ResponseMode="All"
ProcessBackspace="Yes"

[Object7]
_Version=65536
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Logging("OnsetDelay").Log=-1
Logging("OnsetTime").Log=-1
Logging("DurationError").Log=-1
Logging("PreRelease").Log=0
Logging("Duration").Log=0
Logging("StartTime").Log=0
Logging("OffsetTime").Log=0
Logging("FinishTime").Log=0
Logging("TimingMode").Log=0
Logging("CustomOnsetTime").Log=0
Logging("CustomOffsetTime").Log=0
Logging("ActionDelay").Log=0
Logging("ActionTime").Log=0
Logging("TargetOffsetTime").Log=0
Logging("TargetOnsetTime").Log=0
Logging("OffsetDelay").Log=0
Logging("RTTime").Log=-1
Logging("ACC").Log=-1
Logging("RT").Log=-1
Logging("RESP").Log=-1
Logging("CRESP").Log=-1
Logging("Tag").Log=0
_VersionPersist=1
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
Text=""
ForeColor="black"
BackColor="white"
BackStyle="opaque"
BorderColor="black"
BorderWidth="0"
X="center"
Y="center"
Width="100%"
Height="100%"
XAlign="center"
YAlign="center"
AlignHorizontal="center"
AlignVertical="center"
FontName="Courier New"
FontSize="18"
FontBold="Yes"
FontItalic="No"
FontUnderline="No"
FontStrikeout="No"
WordWrap=1
ClearAfter="No"
Duration="1000"
JumpLabel=""
TimingMode=0
PreRelease="0"
OnsetSync=1
OffsetSync=0
Name="blank1"
TypeName="TextDisplay"
Tag=""
Notes=""

[Object8]
_Version=131072
_ExtentX=2646
_ExtentY=1323
_StockProps=0
VersionMajor=1
VersionMinor=1
VersionInternal=4
VersionBuild=1
_VersionPersist=1
Code="Open \"result.txt\" For Append As #1\nPrint #1, c.GetAttrib(\"Subject\"), c.GetAttrib(\"Procedure\"), c.Getattrib(\"Path\"), c.GetAttrib(\"Word\"), c.GetAttrib(\"LeftPic\"), c.GetAttrib(\"CenterPic\"), c.GetAttrib(\"RightPic\"),c.GetAttrib(\"RightPic\"), Stimulus.RT,  Stimulus.ACC\nClose #1"
Name="InLine1"
TypeName="InLine"
Tag=""
Notes=""

[UserScript]


